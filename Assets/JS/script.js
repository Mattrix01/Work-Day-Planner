$(document).ready(function () {
  // creating a function which will be dynamically applied to all the save buttons on click
  $("button").click(function () {
    const storedData = initialiseLocalStorage(baseArray);
    const arr = JSON.parse(localStorage.getItem("schedule"));

    arr[log - 9].text = textBox.value;

    localStorage.setItem("schedule", JSON.stringify(arr));

    console.log("click");
  });
  // ------- // on click we need to get the value from the textbox 'sibling'
  var textItem = $("textarea[textInput=TextInputValue]").val();
  $("textarea").append(textItem);

  // ------- // we also need to get the id of the parent
  // ------- // use the id from the parent and the value from the sibling and add to local stroage
  // ------- // notify the user that it was successful for 5 seconds. add and remove element from html
  // --------------------------------------
  //a function which will look at everything time-block and check if past, present or future
  // ------ // use moment to find out what the current hour is
  // ===== // for each time block we will get its id and compare with current hour
  // ----- // - if past, add past class. if present, add present class. if future, add future class.
  // ------// the classes PAST, PRESENT, FUTURE already have css applied. just need ot use them.
  // -------------------------------------------
  // need to call the function above which checks the time blocks
  // create an interval which will check the time blocks using the function above, every hour.
  // look into local storage - using the id you know exists (for example, 9) - get anything for that id. apply as the value for relevant text area
  // -----------------------------------------------
  //this will be done for every 'id'. 9, 10, 11, 12, 13...........Key/Value - local storage
  // ---------------------------------------------------
  var today = moment();
  $("#currentDay").text(today.format("dddd, Do MMMM, YYYY kk:mm:ss"));
});

// Jquery review vid: https://2u-20.wistia.com/medias/g63k1z1sb3
