$(document).ready(function () {
  // creating a function which will be dynamically applied to all the save buttons on click
  // ------- // on click we need to get the value from the textbox 'sibling'
  // ------- // we also need to get the id of the parent
  // ------- // use the id from the parent and the value from the sibling and add to local stroage
  // ------- // notify the user that it was successful for 5 seconds. add and remove element from html
  // --------------------------------------
  //a function whichwill look at everything time-blockand check if past, present or future
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
  //apply the current time to the 'currentDay' p element in the html using moment.
});
