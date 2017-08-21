/*jslint browser: true, single*/
/*global $, window */
$(document).ready(function() {
  let api = '82f234e0405748d586fd63f835beeef6';
  let zip = $('.zipcode').val();

$("#zipField").on('submit',function(e){
    zip = $('.zipcode').val(); e.preventDefault();
    //alert("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=" + api);
      datacenter();
  })

  function datacenter(){

$.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=" + api,(function(data){

  let min = (data.main.temp_min*9/5-459.67).toFixed(2);
  let curr = (data.main.temp*9/5-459.67).toFixed(2);
  let max = (data.main.temp_max*9/5-459.67).toFixed(2);

    $('div#city').html("City: "+data.name);

    $('div#low').html("Low: "+min);
    $('div#curr').html("Current Temperature: "+curr);
    $('div#high').html("High: "+max);

    $('div#weather').html("Weather: "+data.weather[0].description);
      temperate(); backgrounds();

      function temperate (){
        if (curr>=90){
          $('div#curr').addClass('hot');
          $('div#bigbox').removeClass('bsky');
          $('div#bigbox').addClass('hotback');
        }else if (curr<=40) {
          $('div#bigbox').removeClass('bsky');
          $('div#bigbox').addClass('coldback');
        }else{
          $('div#bigbox').removeAttr( "class" );
          $('div#bigbox').addClass('bsky');
        }
      }
      function backgrounds (){
        if(data.name=="New York"){
          $('body').removeClass();
          $('body').addClass('ny');
        }else if(data.name=="San Francisco"){
          $('body').removeClass();
          $('body').addClass('cali');
        }else if(data.name=="Chicago"){
          $('body').removeClass();
          $('body').addClass('chicago');
        }else if(data.name=="Houston"){
          $('body').removeClass();
          $('body').addClass('houston');
        }else if(data.name=="New Orleans"){
          $('body').removeClass();
          $('body').addClass('neworleans');
        }else if(data.name=="Barrow"){
          $('body').removeClass();
          $('body').addClass('ak');
        }else{
          $('body').addClass('default');
          }
        }
      }))
    }
  })






// An input field for a user to enter a zip code
// A submit button
// When the submit button is clicked:
// A GET request should fetch the weather data from the API
// The following data should be rendered on the page:

// City name, Current temperature, Weather description, Min temp, Max temp
// Have the temperature turn blue if under 40, and red if above 90.

