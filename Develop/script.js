// Stores the current hour (as an integer) into a variable
var currentHour = 12;


// moment().hour();
console.log(currentHour)


// Date Display
var today = moment();
console.log(today)
$("#currentDay").text(today.format("dddd, MMM Do"));


// Assigns HTML element to a JS variable
var hourNine = $('#9am');
var hourTen = $('#10am');
var hourEleven = $('#11am');
var hourTwelve = $('#12pm');
var hourOne = $('#1pm');
var hourTwo = $('#2pm');
var hourThree = $('#3pm');
var hourFour = $('#4pm');
var hourFive = $('#5pm');

// Assigns the new JS variables a numeric value

hourNine = 9;
hourTen = 10;
hourEleven = 11;
hourTwelve = 12;
hourOne = 13;
hourTwo = 14;
hourThree = 15;
hourFour = 16;
hourFive = 17;



// Places variables into an array
var hourArray = [
    hourNine,
    hourTen,
    hourEleven,
    hourTwelve,
    hourOne,
    hourTwo,
    hourThree,
    hourFour,
    hourFive
];
console.log(hourArray)
var hourArrayNew = hourArray.map(changeHourColor);


// changes <textarea> color based on the time of day
function changeHourColor (hourArrayNew) {
  for (let i = 0; i < hourArray.length; i++) {
  if (currentHour === hourArray.splice()) {
    $( "textarea" ).addClass('present');
  } else if (currentHour < hourArray.splice()) {
    $( "textarea" ).addClass('past');
  } else {
    $( "textarea" ).addClass('future');
  }
    
  }
  
}
  
changeHourColor();

 

// function --> when button is clicked, save textarea value to local storage

// $( "#button-container button" ).on( "click", function( event ) {
// });