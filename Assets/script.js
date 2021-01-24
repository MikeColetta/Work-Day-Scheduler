//function that displays the current time and date using Luxon.

const currentTime = moment();
console.log(currentTime);
$("#currentDay").text(currentTime.format("dddd MMMM Mo YYYY h:mmA"));


//make HTML for the time blocks that represent 9am - 5pm


colorCode()

function colorCode () {
    var hoursArray = [];
    $('.pastPresentFuture').each (function() {
      hoursArray.push($(this).val());
        console.log(hoursArray)
    });
}
     

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
//1. turn .pastPresentFuture values into an array
//2. turn that string into integers using parse int. 
//3. loop to check that each integer is before or after the given time. 
//4. add the appropriate class to that integer to change the style.


//time blocks are clickable and can be written in.

//time block content is saved to local storage

//localStorage.getItem to load appointments into correct time blocks.