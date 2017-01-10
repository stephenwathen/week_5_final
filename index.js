//we need an input element, id, value

//we will need a button
//	on button click, run a function to change the background
// based on the input
$(document).ready(function(){

	$('#submit-btn').click(changeBackground);

	function changeBackground(){

		//define function that runs whent the button is clicked
		//get city name input from input element
			var cityInput = $('#city-type').val();

			
				//San Fran
				if(cityInput == "San Francisco" || cityInput == "SF" || cityInput == "Bay City"){
					//if city input is SF, make background sf.jpg
					$('body').css('background-image', "url(https://github.com/ga-students/fewd-denver-2/blob/master/Week_05_javascript/Assignment/solution_code/images/sf.jpg?raw=true)");
			
				}
				
				//Austin

				else if ( cityInput == "Austin" || cityInput == "ATX"){
				
					$('body').css('background-image', "url(https://github.com/ga-students/fewd-denver-2/blob/master/Week_05_javascript/Assignment/solution_code/images/austin.jpg?raw=true)");
					//if city input is Austin, make background austin.jpg
				}
				
				//NYC
				else if( cityInput == "New York" || cityInput == "New York City" || cityInput == "NYC"){
				
					$('body').css('background-image', "url(https://github.com/ga-students/fewd-denver-2/blob/master/Week_05_javascript/Assignment/solution_code/images/nyc.jpg?raw=true)");
					//if city input is NYC, make background NYC.jpg
				}
				
				//LA
				else if( cityInput == "Los Angeles" || cityInput == "LA" || cityInput == "LAX"){
			
					$('body').css('background-image', "url(https://github.com/ga-students/fewd-denver-2/blob/master/Week_05_javascript/Assignment/solution_code/images/la.jpg?raw=true)");
				//if city input is LA, make background LA.jpg
				}
			
				//Sydney
				else if( cityInput == "Sydney" || cityInput == "SYD" ){
			
					$('body').css('background-image', "url(https://github.com/ga-students/fewd-denver-2/blob/master/Week_05_javascript/Assignment/solution_code/images/sydney.jpg?raw=true)");
				//if city input is Sydney, make background sydney.jpg
				}
				return false;
	}
});



