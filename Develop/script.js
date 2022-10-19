// Stores the current hour (as an integer) into a variable
var currentHour = 12;


// moment().hour();
console.log(currentHour)


// Date Display
var today = moment();
console.log(today)
$("#currentDay").text(today.format("dddd, MMM Do"));





// changes <textarea> color based on the time of day
function changeHourColor () {
  $(".time-block").each(function () {
    var plannerHour = $(this).attr("id");
    if (plannerHour < currentHour) {
      $(this).children("textarea").addClass("past");
    }

  })
  
}
  
changeHourColor();

 

// function --> when button is clicked, save textarea value to local storage

// $( "#button-container button" ).on( "click", function( event ) {
// });