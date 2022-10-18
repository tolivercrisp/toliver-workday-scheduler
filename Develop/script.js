var hourNine = $('#9am');
var hourTen = $('#10am');
var hourEleven = $('#11am');
var hourTwelve = $('#12pm');
var hourOne = $('#1pm');
var hourTwo = $('#2pm');
var hourThree = $('#3pm');
var hourFour = $('#4pm');
var hourFive = $('#5pm');

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


var currentHour = moment().hour();
console.log(currentHour)


// Date Display
var today = moment();
console.log(today)
$("#currentDay").text(today.format("dddd, MMM Do"));


// changes <textarea> color based on the time of day
$(function () {


  });


  if (currenthour === 12) {
    make this ID 
  }