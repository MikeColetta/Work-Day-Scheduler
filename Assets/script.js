$(document).ready(function () {

  //function that displays the current time and date using Luxon.
  var savedAppointments = {};
  // var hoursArray = [];
  var currentTime = moment.parseZone();
  compareNow = parseInt(moment.parseZone().format("H"))
  $("#currentDay").text(currentTime.format("dddd MMMM Mo YYYY h:mm A"));

  compare()
  getSavedApptData()

  //Grabs from local storage and writes appointments.
  function getSavedApptData() {
    var localStorageContent = JSON.parse(localStorage.getItem("savedAppointments"))
    if (localStorageContent === null) {
      return
    }
    savedAppointments = localStorageContent

    var appointmentKeys = Object.keys(savedAppointments)

    for (var i = 0; i < appointmentKeys.length; i++) {
      var key = appointmentKeys[i]
      var text = savedAppointments[key]
      $("#" + key).val(text)
    }
  }

  //Compares current time to hour blocks and color codes them. 
  function compare() {
    compareNine()
    compareTen()
    compareEleven()
    compareTwelve()
    compareOne()
    compareTwo()
    compareThree()
    compareFour()
    compareFive()

    function compareNine() {
      nineAppt = 9;
      if (compareNow === nineAppt) {
        $("#nineAppt").addClass("present")
      }
      else if (compareNow < nineAppt) {
        $("#nineAppt").addClass("future")
      }
      else if (compareNow > nineAppt) {
        $("#nineAppt").addClass("past")
      }
    };

    function compareTen() {
      tenAppt = 10;
      if (compareNow === tenAppt) {
        $("#tenAppt").addClass("present")
      }
      else if (compareNow < tenAppt) {
        $("#tenAppt").addClass("future")
      }
      else if (compareNow > tenAppt) {
        $("#tenAppt").addClass("past")
      }
    };
    function compareEleven() {
      elevenAppt = 11;
      if (compareNow === elevenAppt) {
        $("#elevenAppt").addClass("present")
      }
      else if (compareNow < elevenAppt) {
        $("#elevenAppt").addClass("future")
      }
      else if (compareNow > elevenAppt) {
        $("#elevenAppt").addClass("past")
      }
    };

    function compareTwelve() {
      twelveAppt = 12;
      if (compareNow === twelveAppt) {
        $("#twelveAppt").addClass("present")
      }
      else if (compareNow < twelveAppt) {
        $("#twelveAppt").addClass("future")
      }
      else if (compareNow > twelveAppt) {
        $("#twelveAppt").addClass("past")
      }
    };

    function compareOne() {
      oneAppt = 13;
      if (compareNow === oneAppt) {
        $("#oneAppt").addClass("present")
      }
      else if (compareNow < oneAppt) {
        $("#oneAppt").addClass("future")
      }
      else if (compareNow > oneAppt) {
        $("#oneAppt").addClass("past")
      }
    };

    function compareTwo() {
      twoAppt = 14;
      if (compareNow === twoAppt) {
        $("#twoAppt").addClass("present")
      }
      else if (compareNow < twoAppt) {
        $("#twoAppt").addClass("future")
      }
      else if (compareNow > twoAppt) {
        $("#twoAppt").addClass("past")
      }
    };

    function compareThree() {
      threeAppt = 15;
      if (compareNow === threeAppt) {
        $("#threeAppt").addClass("present")
      }
      else if (compareNow < threeAppt) {
        $("#threeAppt").addClass("future")
      }
      else if (compareNow > threeAppt) {
        $("#threeAppt").addClass("past")
      }
    };

    function compareFour() {
      fourAppt = 16;
      if (compareNow === fourAppt) {
        $("#fourAppt").addClass("present")
      }
      else if (compareNow < fourAppt) {
        $("#fourAppt").addClass("future")
      }
      else if (compareNow > fourAppt) {
        $("#fourAppt").addClass("past")
      }
    };

    function compareFive() {
      fiveAppt = 17;
      if (compareNow === fiveAppt) {
        $("#fiveAppt").addClass("present")
      }
      else if (compareNow < fiveAppt) {
        $("#fiveAppt").addClass("future")
      }
      else if (compareNow > fiveAppt) {
        $("#fiveAppt").addClass("past")
      }
    };
  }

  //Grabs all buttons in the container.
  $("#allInputs").on("click", "button", function () {
    var textID = $(this).attr("formText")
    var textAppointment = $("#" + textID)
    savedAppointments[textID] = textAppointment.val()
    cacheApptData()
  })

  //Caches appointments to local storage.
  function cacheApptData() {
    localStorage.setItem("savedAppointments", JSON.stringify(savedAppointments));
  }
})