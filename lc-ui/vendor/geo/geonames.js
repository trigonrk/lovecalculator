/**
 * getting latitude ,longitude and timezone
 * http://www.vedicrishiastro.com/astro-api/
 * Author: Chandan Tiwari
 * Date: 21/02/15
 * Time: 5:42 PM
 */
var getGeoDetails = function (a, latitudeId, longitudeId, timezoneId, dstName) { 
  var b = [], 
      d = "http://lovecalc.kstack.com.au/geo/", 
      e = function (a, c) { 
            $.getJSON(
              d + "php/getGeoDetails.php", 
              { name_startsWith: a, maxRows: 6 }, 
              function (a) {
                b = []; 
                var d = a.geonames; 
                $.each(d, function (a, c) { 
                  var d = c.place_name + " " + c.country_code; 
                  b.push({ value: d, latitude: c.latitude, longitude: c.longitude, countryCode: c.country_code, timeZoneId: c.timezone_id }) 
                }), 
                c(b) 
              }
            ) 
          }; 

  $(a).typeahead(
    { minLength: 3 }, 
    { source: function (a, b) { e(a, b) }}
  ), 
  $(a).on("typeahead:selected", 
          function (a, b) { 
            var c = b.timeZoneId, 
            e = $('input[name="'+dstName+'"]:checked').length > 0; 
            $("#"+latitudeId).val(b.latitude), 
            $("#"+longitudeId).val(b.longitude), 
            $.getJSON(d + "php/getGeoDetails.php", 
              { time_zone_id: c, isDst: e }, 
              function (a) { 
                $("#"+timezoneId).val(a.timezone) 
              }) 
          }     
  ) 
}; 

