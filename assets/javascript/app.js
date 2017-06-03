//----------------Score Screen---------------------------------------

//----------------TimerTimer----------------------------------------------

var number = 121; 

var intervalId;

$("#startButton").on("click", start); 

function start(){
  intervalId = setInterval(decrement, 1000);
  $("#quizArea").css("display", "block");
  $("#startButton").css("display", "none");
}

function decrement() {
  number--;
  $("#counter").html("<span>" + number + "</span>"); 

  if (number === 0) {
    stop();

  }
}

function stop() {
  clearInterval(intervalId); 
  $("#finishArea").css("display", "block"); 
  $("#quizArea").css("display", "none");
  quizDone(); 
}

//---------------------Quiz------------------------------------------

function quizDone () {
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

    $("#finishArea").css("display", "block"); 
    $("#quizArea").css("display", "none"); 
  };

$("#doneButton").on("click", quizDone); 
