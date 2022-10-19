// Dynamic Date Display in the header
var today = moment();
console.log(today)
$("#currentDay").text(today.format("dddd, MMM Do"));

// Stores the current hour (as an integer) into a variable
var currentHour = 12;

// moment().hour();
console.log(currentHour)


// Changes <textarea> color based on the time of day
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

// Stores HTML element classed "time-block" as a variable
var timeBlock = $(".time-block")

for (let i = 0; i < timeBlock.length; i++) {
  var timeBlockIndexed = timeBlock[i]
  var timeId = $(timeBlockIndexed).attr("id");
  var timeValue = localStorage.getItem(timeId);
  if (timeValue) {
    $(timeBlockIndexed).children(".description").val(timeValue)
  }
};

// When the save button is clicked, save the text to local storage

$(".saveBtn").on("click", function () {
  var key = $(this).parent().attr("id");
  var value = $(this).parent().find(".description").val();
  localStorage.setItem(key, value)
});
  
changeHourColor();

 

// function --> when button is clicked, save textarea value to local storage

// $( "#button-container button" ).on( "click", function( event ) {
// });