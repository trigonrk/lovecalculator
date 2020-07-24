import { _ } from 'lodash';
import axios from 'axios';
import moment from 'moment';

import chineseZodiac from '../../db/chinese/zodiac';
import chineseYears from '../../db/chinese/years';
import chineseMatrix from '../../db/chinese/matrix';

import westernZodiac from '../../db/western/zodiac';
import westernMatrix from '../../db/western/matrix';

import indianScores from '../../db/indian/scores';

class MatcController {
	getCalculation( req, res ) {

		console.log('test')
		if ( !req.body.male || !req.body.female ) {
			return res.status( 400 )
				.send({
			  		success: 'false',
			  		message: 'One of the parameters is required',
				});
		}
		let male = req.body.male;
		let female = req.body.female;

		////////////////// CHINESE ZODIAC //////////////

		const chineseMaleYear = getChineseYear( male.birth );
		const chineseMaleSign = getChineseZodiac( chineseMaleYear.id_zodiac );
		const chineseFemaleYear = getChineseYear( female.birth );
		const chineseFemaleSign = getChineseZodiac( chineseFemaleYear.id_zodiac );
		const chineseScore = chineseMatrix[ ( chineseMaleSign.id - 1) ][ ( chineseFemaleSign.id - 1 ) ];
		
		////////////////// WESTERN ZODIAC //////////////

		const westernMaleZodiac = getWesternZodiac( male.birth );
		const westernFemaleZodiac = getWesternZodiac( female.birth );
		const westernScore = westernMatrix[ ( westernMaleZodiac.id - 1) ][ ( westernFemaleZodiac.id - 1 ) ];
		
		////////////////// INDIAN ZODIAC //////////////

		let indianMaleFullDate = male.birth + ' ' + male.time;
		let indianFemaleFullDate = female.birth + ' ' + female.time;

		indianMaleFullDate = moment( indianMaleFullDate, "DD/MM/YYYY HH:mm" );
		indianFemaleFullDate = moment( indianFemaleFullDate, "DD/MM/YYYY HH:mm" );

		const params = {
			m_day: moment( indianMaleFullDate ).get( 'date' ),
			m_month: moment( indianMaleFullDate ).get( 'month' ) + 1,
			m_year: moment( indianMaleFullDate ).get( 'year' ),
			
			m_hour: moment( indianMaleFullDate ).get( 'hour' ),
			m_min: moment( indianMaleFullDate ).get( 'minute' ),
			
			m_lat: male.latitude,
			m_lon: male.longitude,
			m_tzone: male.timezone,

			f_day: moment( indianFemaleFullDate ).get( 'date' ),
			f_month: moment( indianFemaleFullDate ).get( 'month' ) + 1,
			f_year: moment( indianFemaleFullDate ).get( 'year' ),
			f_hour: moment( indianFemaleFullDate ).get( 'hour' ),
			f_min: moment( indianFemaleFullDate ).get( 'minute' ),

			f_lat: female.latitude,
			f_lon: female.longitude,
			f_tzone: female.timezone,
		};
		const userID = "613058";
		const apiKey = "b7d482c067f985cb7d506b480087ca4a";

		// const userID = "603648";
		// const apiKey = "3161d7e34e535c2ed5f9732a6d5cf804";
		const auth = "Basic " + new Buffer(userID + ":" + apiKey).toString('base64');
		const settings = {
			dataType:'json',
			headers: {
				"authorization": auth,
				"Content-Type":'application/json'
			},
			// url: URL,
			// method: "POST",
			// data:JSON.stringify( params )
		};

		// Requests will be executed in parallel...
		axios.all([
			axios.post( 'https://json.astrologyapi.com/v1/match_making_report', params, settings ),
			axios.post( 'https://json.astrologyapi.com/v1/match_dashakoot_points', params, settings )
		])
		.then( axios.spread( function ( matchResponse, dashakootResponse ) {

			const match = matchResponse.data;
			const dash = dashakootResponse.data;
			const scores = getIndianScores( match, dash );

			// Extending scores object
			_.extend( scores, { western: westernScore }, { chinese: chineseScore });
			
			// This callback will be executed only when both requests are complete.
			return res.status( 200 )
				.send({
					success: 'true',
					message: 'Match calculated successfully !!!',
					data: {
						scores : scores,
						total : getMatchCalculation( scores )
					}
				});

		}))
		.catch( error => {
			console.log( '------------ ERROR -------------' );
			console.log( error.response.data.msg );
			if (error.response.status === 403) {

			return res.status( 200 )
				.send({
					success: 'true',
					message: 'Match calculated successfully !!!',
					data: {
						scores : { western: westernScore, chinese: chineseScore, indian: error.response.data.msg },
						total : (((westernScore + chineseScore)/200) * 100)
					}
				});
			}
		});
	}
}


// -- @ToDo move this logic to a service

const getChineseYear = function ( date ) {

	const compare = moment( date, "DD/MM/YYYY" );

	return _.find( chineseYears, function( y ) { 
		
		let start  = moment( y.start, "DD/MM/YYYY" );
		let end    = moment( y.end, "DD/MM/YYYY" );
		let inBetween = compare.isBetween( start, end );

		if( inBetween ) {
			return y;
		}
	});
};

const getChineseZodiac = function( id ) {
	return _.find( chineseZodiac, function( z ) { 
		return z.id === id; 
	});
}

const getWesternZodiac = function( date ) {

	const currentYear = moment().year();
	const formatted = moment( date, "DD/MM/YYYY" ).format( "DD/MM" ) + '/' + currentYear;
	const compare = moment( formatted, "DD/MM/YYYY" );
	
	return _.find( westernZodiac, function( wz ) { 

		let start = wz.start + '/' + currentYear;
		let end = wz.end + '/' + currentYear;
		
		start  = moment( wz.start, "DD/MM/YYYY" );
		end    = moment( wz.end, "DD/MM/YYYY" );
		
		let inBetween = compare.isBetween( start, end );

		if( inBetween ) {
			return wz;
		}
	});
}

const getIndianScores = function ( match, dasha ) {

	let ashtakootScore = getPoints( match.ashtakoota.received_points );
	let dashakootScore = getPoints( dasha.total.received_points );
	let manglikScore = (match.manglik.status) ? 10 : 20;
	let vedhaScore = (match.vedha_dosha.status) ? 10 : 20;
	

	ashtakootScore = ashtakootScore.ashakoot;
	dashakootScore = dashakootScore.dahakoot;

	return {
		ashtakoot : ashtakootScore,
		dashakoot : dashakootScore,
		manglik : manglikScore,
		vedha : vedhaScore,
	}

}

const getPoints = function ( value ) {

	const score = Math.round( value );

	return _.find( indianScores, function( s ) { 
		return s.score === score; 
	});
}

const getMatchCalculation = function ( scores ) {
	
	let total = 0;

	_.map( scores, function( score ) {
		total += score;
	});

	return Math.round((total / 300) * 100);

};

const matcController = new MatcController();
export default matcController;
