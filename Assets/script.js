$(document).ready(function(){

//function that displays the current time and date using Luxon.
var savedAppointments = [];
// var hoursArray = [];
var currentTime = moment.parseZone();
compareNow = parseInt(moment.parseZone().format("H"))
console.log(compareNow);
console.log(currentTime);
console.log(moment(currentTime, 'hour'))
$("#currentDay").text(currentTime.format("dddd MMMM Mo YYYY h:mm A"));

console.log(compareNow > 9)

compare()

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
//save buttons
// $(".saveBtn").on("click", function () {
//   var appointmentForm = [$('.appointmentForm').val()]
//   console.log(appointmentForm)
//   console.log(savedAppointments)
  
//   for (i = 0; i < appointmentForm.length; i++) {
//     savedAppointments.push(appointmentForm[i])
//     localStorage.setItem("appointments", JSON.stringify(savedAppointments));
//   }
// })

  $("#nineBtn").on("click", function () {
    saveBtn()
  })

  $("#tenBtn").on("click", function () {
    saveBtn()
  })

  $("#elevenBtn").on("click", function () {
    saveBtn()
  })

  $("#twelveBtn").on("click", function () {
    saveBtn()
  })

  $("#oneBtn").on("click", function () {
    saveBtn()
  })

  $("#twoBtn").on("click", function () {
    saveBtn()
  })

  $("#threeBtn").on("click", function () {
    saveBtn()
  })

  $("#fourBtn").on("click", function () {
    saveBtn()
  })

  $("#fiveBtn").on("click", function () {
    saveBtn()
  })

  function saveBtn() {
    var appointmentForm = $('.appointmentForm').val();
    savedAppointments.push(appointmentForm);
    console.log(appointmentForm)
    console.log(savedAppointments)
  }

// colorCodeBlocks()

// function colorCodeBlocks () {
//     var nineAppt = moment()
//     nineAppt.set({hour:9,minute:0,second:0,millisecond:0})
//     nineAppt.toISOString()
//     nineAppt.format()
//     var tenAppt = moment()
//     tenAppt.set({hour:10,minute:0,second:0,millisecond:0})
//     tenAppt.toISOString()
//     tenAppt.format()
//     var elevenAppt = moment()
//     elevenAppt.set({hour:11,minute:0,second:0,millisecond:0})
//     elevenAppt.toISOString()
//     elevenAppt.format()
//     var twelveAppt = moment()
//     twelveAppt.set({hour:12,minute:0,second:0,millisecond:0})
//     twelveAppt.toISOString()
//     twelveAppt.format()
//     var oneAppt = moment()
//     oneAppt.set({hour:13,minute:0,second:0,millisecond:0})
//     oneAppt.toISOString()
//     oneAppt.format()
//     var twoAppt = moment()
//     two.set({hour:14,minute:0,second:0,millisecond:0})
//     two.toISOString()
//     two.format()
//     var threeAppt = moment()
//     threeAppt.set({hour:15,minute:0,second:0,millisecond:0})
//     threeAppt.toISOString()
//     threeAppt.format()
//     var fourAppt = moment()
//     fourAppt.set({hour:16,minute:0,second:0,millisecond:0})
//     fourAppt.toISOString()
//     fourAppt.format()
//     var fiveAppt = moment()
//     fiveAppt.set({hour:17,minute:0,second:0,millisecond:0})
//     fiveAppt.toISOString()
//     fiveAppt.format()
    
//       if (currentTime < nineAppt) {
//         $("#nineAppt").addClass("past")
//       }
//       else if (currentTime = nineAppt) {
//         $("#nineAppt").addClass("present")
//       }
//       else {
//         $("#nineAppt").addClass("future")
//       }
//     };

     

//         for (i = 0; i < hoursArray.length; i++) {
//             if (hoursArray[i] < parseInt(moment("hh"))) {
//              $(hoursArray[i]).addClass(".past")
//             }

//             if (hoursArray[i] = parseInt(moment("hh"))) {
//                 $(hoursArray[i]).addClass(".present")
//                }
            
//             else {
//                 $(hoursArray[i]).addClass(".future")
//             }
//         }
//     return
//   }




//have the time blocks show past present or future. Will need a current time variable
// function pastPresentFuture() {
          
 

// function needs to check if the block is in the past, present or future and then add a color coding to the hour box.
//1. compare current moment JS with present moment JS on block

//time blocks are clickable and can be written in.

//time block content is saved to local storage

//localStorage.getItem to load appointments into correct time blocks.

//list of things I need to call on
// -save buttons
// -forms
// -the current Time
})


