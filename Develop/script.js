// Dynamic Date Display in the header
var today = moment();
console.log(today)
$("#currentDay").text(today.format("dddd, MMM Do"));

// Stores the current hour (as an integer) into a variable
var currentHour = moment().hour();
console.log(currentHour)

// Changes <textarea> color based on the time of day
function changeHourColor () {
  $(".time-block").each(function () {
    var plannerHour = $(this).attr("id");
    if (plannerHour == currentHour) {
      $(this).children("textarea").addClass("present");
    } else if (plannerHour < currentHour) {
      $(this).children("textarea").addClass("past");
    } else {
      $(this).children("textarea").addClass("future");
    }
  })
}

// Click event on save button that saves text to localStorage
$(".saveBtn").on("click", function () {
  var key = $(this).parent().attr("id");
  var value = $(this).parent().find(".description").val();
  localStorage.setItem(key, value)
});

// Stores HTML element classed "time-block" as a variable
var timeBlock = $(".time-block")

// Retrieves stored data when the page is refreshed
for (let i = 0; i < timeBlock.length; i++) {
  var timeBlockIndexed = timeBlock[i]
  var timeId = $(timeBlockIndexed).attr("id");
  var timeValue = localStorage.getItem(timeId);
  if (timeValue) {
    $(timeBlockIndexed).children(".description").val(timeValue)
  }
};

// Calls the changeHourColor() function into play
changeHourColor();
