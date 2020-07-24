var fs = require( 'fs' );

var file = './western/matrix.csv';
var content = fs.readFileSync( file, "utf8" );

var Papa = require( 'papaparse' );

Papa.parse(content, {
    header: false,
    delimiter: "\t",
    complete: function( results ) {
        rows = results.data;
        // console.log( 'rows ----> ', rows );
    }
});