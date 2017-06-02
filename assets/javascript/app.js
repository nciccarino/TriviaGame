//---------------Attempt 1---------------------------------------------------------------------------

// //------------Global Variables--------------------------------

// var correct = ["Mississippi", "Austin", "RhodeIsland", "Minnesota", "Russia", "NewHampshire"];

// var clicked = []; //need to create a blank spot if left unclicked

// //------------Functions---------------------------------------

// $(document).ready(function(){

// //------------Data Gathering----------------------------------

//   $("#doneButton").on("click", function(){
//     var selected = $("input[type=radio]:checked");
//     $.each(selected, function(){
//       clicked[this.id] = this.value;
//       console.log(this)
//       console.log(this.value)
//       var len = correct.length; 
//       var i = 0;
//       for (i; i < len; i++) {
//         if ($.inArray(correct[i], clicked)== -1) {
//           console.log("incorrect");
//         } else {
//           console.log("correct"); 
//         }
//       }
//     })
//   })

// }); //end 

//-----------------End Attempt 1-------------------------------------------------------------------------------

$("#doneButton").on("click", function(){
  var correct = $("input:radio[value=true]:checked");
    console.log(correct);
    correct = correct.length;
    $("#right").append(correct);
  var incorrect = $("input:radio[value=false]:checked"); 
    console.log(incorrect);
    incorrect = incorrect.length;
    $("#wrong").append(incorrect); 
  var none = $("input:radio[value=none]:checked"); 
    console.log(none);
    none = none.length;
    $("#unanswered").append(none);  
});
