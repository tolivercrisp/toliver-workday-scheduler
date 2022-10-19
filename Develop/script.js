// Dynamic Date Display in the header
var today = moment();
console.log(today)
$("#currentDay").text(today.format("dddd, MMM Do"));

// Stores the current hour (as an integer) into a variable
var currentHour = 12;

// moment().hour();
console.log(currentHour)


// function that changes <textarea> color based on the time of day
function changeHourColor () {
  $(".time-block").each(function () {
    var plannerHour = $(this).attr("id");
    if (plannerHour < currentHour) {
      $(this).children("textarea").addClass("past");
    } else if (plannerHour == currentHour) {
      $(this).children("textarea").addClass("present");
    } else {
      $(this).children("textarea").addClass("future");

    }

  })
  
}
  
changeHourColor();

 

// function --> when button is clicked, save textarea value to local storage

// $( "#button-container button" ).on( "click", function( event ) {
// });