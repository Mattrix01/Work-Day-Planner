var saveBtn = document.querySelectorAll(".saveBtn");
var clearBtn = document.querySelectorAll(".clearBtn");

var today = moment();
$("#currentDay").text(today.format("dddd, Do MMMM, YYYY kk:mm:ss"));

var currentHour = moment().hours();

var maximumHours = 9;
var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (var i = 0; i <= maximumHours; i++) {
  //present
  if (currentHour == workHours[i]) {
    document.getElementById(i).children[1].classList.add("present");
  }
  //past
  else if (currentHour > workHours[i]) {
    document.getElementById(i).children[1].classList.add("past");
  }
  //future
  else {
    document.getElementById(i).children[1].classList.add("future");
  }
  //save button click local storage
  saveBtn[i].addEventListener("click", function () {
    var id = this.parentElement.getAttribute("id");
    console.log(id);
    var text = document.getElementById(id).children[1].value;
    console.log(text);
    localStorage.setItem(id, text);
  });
  if (localStorage.getItem(i)) {
    document.getElementById(i).children[1].value = localStorage.getItem(i);
  }
}

clearBtn[i].addEventListener("click", function () {
  localStorage.clear();
});
