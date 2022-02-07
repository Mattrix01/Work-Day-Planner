var saveBtn = document.querySelectorAll(".saveBtn");

// $(document).ready(function () {
//   // ------- // we also need to get the id of the parent
//   // ------- // use the id from the parent and the value from the sibling and add to local stroage
//   // ------- // notify the user that it was successful for 5 seconds. add and remove element from html
//   // --------------------------------------
//   //a function which will look at everything time-block and check if past, present or future
//   // ------ // use moment to find out what the current hour is
//   // ===== // for each time block we will get its id and compare with current hour
//   // ----- // - if past, add past class. if present, add present class. if future, add future class.
//   // ------// the classes PAST, PRESENT, FUTURE already have css applied. just need ot use them.
//   // -------------------------------------------
//   // need to call the function above which checks the time blocks
//   // create an interval which will check the time blocks using the function above, every hour.
//   // look into local storage - using the id you know exists (for example, 9) - get anything for that id. apply as the value for relevant text area
//   // -----------------------------------------------
// });

var today = moment();
$("#currentDay").text(today.format("dddd, Do MMMM, YYYY kk:mm:ss"));

var currentHour = moment().hours();

var maximumHours = 9;
var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (var i = 1; i <= maximumHours; i++) {
  //present
  if (currentHour == workHours[i]) {
    document.getElementById(i).children[1].classList.add("present");
    console.log(i);
  }
  //past
  else if (currentHour > workHours[i]) {
    document.getElementById(i).children[1].classList.add("past");
    console.log(i);
  }
  //future
  else {
    document.getElementById(i).children[1].classList.add("future");
    console.log(i);
  }
}
