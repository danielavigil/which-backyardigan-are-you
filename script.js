/*Add your JavaScript here*/
var pabloScore = 0;
var uniquaScore = 0;
var tashaScore = 0;
var tyroneScore = 0;
var austinScore = 0;
var hermanScore = 0;

var questionCount= 0;

var result= document.getElementById("result");
var resultImage = document.getElementById("resultImage");

var q1a1= document.getElementById("q1a1");
var q1a2= document.getElementById("q1a2");
var q1a3= document.getElementById("q1a3");
var q1a4= document.getElementById("q1a4");
var q1a5= document.getElementById("q1a5");
var q1a6= document.getElementById("q1a6");

var q2a1= document.getElementById("q2a1");
var q2a2= document.getElementById("q2a2");
var q2a3= document.getElementById("q2a3");
var q2a4= document.getElementById("q2a4");
var q2a5= document.getElementById("q2a5");
var q2a6= document.getElementById("q2a6");

var q3a1= document.getElementById("q3a1");
var q3a2= document.getElementById("q3a2");
var q3a3= document.getElementById("q3a3");
var q3a4= document.getElementById("q3a4");
var q3a5= document.getElementById("q3a5");
var q3a6= document.getElementById("q3a6");

var q4a1= document.getElementById("q4a1");
var q4a2= document.getElementById("q4a2");
var q4a3= document.getElementById("q4a3");
var q4a4= document.getElementById("q4a4");
var q4a5= document.getElementById("q4a5");
var q4a6= document.getElementById("q4a6");

var q5a1= document.getElementById("q5a1");
var q5a2= document.getElementById("q5a2");
var q5a3= document.getElementById("q5a3");
var q5a4= document.getElementById("q5a4");
var q5a5= document.getElementById("q5a5");
var q5a6= document.getElementById("q5a6");

var q6a1= document.getElementById("q6a1");
var q6a2= document.getElementById("q6a2");
var q6a3= document.getElementById("q6a3");
var q6a4= document.getElementById("q6a4");
var q6a5= document.getElementById("q6a5");
var q6a6= document.getElementById("q6a6");

var restart = document.getElementById("restart");

//Event listeners
q1a1.addEventListener("click", pablo);
q1a2.addEventListener("click", tasha);
q1a3.addEventListener("click", uniqua);
q1a4.addEventListener("click", austin);
q1a5.addEventListener("click", herman);
q1a6.addEventListener("click", tyrone);

q2a1.addEventListener("click", pablo);
q2a2.addEventListener("click", tyrone);
q2a3.addEventListener("click", herman);
q2a4.addEventListener("click", uniqua);
q2a5.addEventListener("click", tasha);
q2a6.addEventListener("click", austin);

q3a1.addEventListener("click", austin);
q3a2.addEventListener("click", tasha);
q3a3.addEventListener("click", tyrone);
q3a4.addEventListener("click", herman);
q3a5.addEventListener("click", uniqua);
q3a6.addEventListener("click", pablo);

q4a1.addEventListener("click", uniqua);
q4a2.addEventListener("click", austin);
q4a3.addEventListener("click", herman);
q4a4.addEventListener("click", pablo);
q4a5.addEventListener("click", tyrone);
q4a6.addEventListener("click", tasha);

q5a1.addEventListener("click", uniqua);
q5a2.addEventListener("click", herman);
q5a3.addEventListener("click", tyrone);
q5a4.addEventListener("click", tasha);
q5a5.addEventListener("click", pablo);
q5a6.addEventListener("click", austin);

q6a1.addEventListener("click", tyrone);
q6a2.addEventListener("click", austin);
q6a3.addEventListener("click", tasha);
q6a4.addEventListener("click", pablo);
q6a5.addEventListener("click", uniqua);
q6a6.addEventListener("click", herman);

restart.addEventListener("click", restartQuiz);

function pablo(){
  pabloScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " pabloScore = " + pabloScore);

  if (questionCount == 6){
    console.log("The quiz is done!");
    updateResult();
  }
}

function uniqua(){
  uniquaScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " uniquaScore = " + uniquaScore);

  if (questionCount == 6){
    console.log("The quiz is done!");
    updateResult();
  }
}

function tasha(){
  tashaScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " tashaScore = " + tashaScore);
  
  if (questionCount == 6){
    console.log("The quiz is done!");
    updateResult();
  }
}

function tyrone(){
  tyroneScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " tyroneScore = " + tyroneScore);

  if (questionCount == 6){
    console.log("The quiz is done!");
    updateResult();
  }
}

function austin(){
  austinScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " austinScore = " + austinScore);

  if (questionCount == 6){
    console.log("The quiz is done!");
    updateResult();
  }
}

function herman(){
  hermanScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " hermanScore = " + hermanScore);

  if (questionCount == 6){
    console.log("The quiz is done!");
    updateResult();
  }
}

function updateResult(){
  if (pabloScore >= 2) {
    result.innerHTML = "You are Pablo!";
    console.log("You are Pablo!");

    var pabloEl = document.createElement("img");
    pabloEl.src = "assets/pablo.jpg";
    pabloEl.alt = "Picture of Pablo with sunglasses";
    pabloEl.style.width = "200px";
    pabloEl.style.margin = "0 auto";
    resultImage.appendChild(pabloEl)
  } 
  else if (uniquaScore >= 2) {
    result.innerHTML = "You are Uniqua!";
    console.log("You are Uniqua!");

    var uniquaEl = document.createElement("img");
    uniquaEl.src = "assets/uniqua.png";
    uniquaEl.alt = "Picture of Uniqua with a microphone";
    uniquaEl.style.width = "200px";
    resultImage.appendChild(uniquaEl)
  } 
  else if (tashaScore >= 2) {
    result.innerHTML = "You are Tasha!";
    console.log("You are Tasha!");

    var tashaEl = document.createElement("img");
    tashaEl.src = "assets/tasha.jpg";
    tashaEl.alt = "Picture of Tasha with fishing attire";
    tashaEl.style.width = "200px";
    resultImage.appendChild(tashaEl)
  } 
  else if (tyroneScore >= 2) {
    result.innerHTML = "You are Tyrone!";
    console.log("You are Tyrone!");

    var tyroneEl = document.createElement("img");
    tyroneEl.src = "assets/tyrone.jpg";
    tyroneEl.alt = "Picture of Tyrone with butler outfit, holding a lamp while eavesdropping";
    tyroneEl.style.width = "200px";
    resultImage.appendChild(tyroneEl)
  } 
  else if (austinScore >= 2) {
    result.innerHTML = "You are Austin!";
    console.log("You are Austin!");

    var austinEl = document.createElement("img");
    austinEl.src = "assets/austin.jpg";
    austinEl.alt = "Picture of Austin in clown outfit";
    austinEl.style.width = "200px";
    resultImage.appendChild(austinEl)
  } 
  else if (hermanScore >= 2) {
    result.innerHTML = "You are Herman!";
    console.log("You are Herman!");

    var hermanEl = document.createElement("img");
    hermanEl.src = "assets/herman.jpg";
    hermanEl.alt = "Picture of Herman wearing a hat";
    hermanEl.style.width = "200px";
    resultImage.appendChild(hermanEl)
    }
}

//Restart quiz function
function restartQuiz(){
  result.innerHTML = "You are...";
  resultImage.innerHTML = "";
  questionCount = 0;
  pabloScore = 0;
  uniquaScore = 0;
  tashaScore = 0;
  tyroneScore = 0;
  austinScore = 0;
  hermanScore = 0;
  enableQuestions();
}

//Disable buttons
q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);
q1a5.addEventListener("click", disableQ1);
q1a6.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);
q2a5.addEventListener("click", disableQ2);
q2a6.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);
q3a5.addEventListener("click", disableQ3);
q3a6.addEventListener("click", disableQ3);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);
q4a5.addEventListener("click", disableQ4);
q4a6.addEventListener("click", disableQ4);

q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);
q5a3.addEventListener("click", disableQ5);
q5a4.addEventListener("click", disableQ5);
q5a5.addEventListener("click", disableQ5);
q5a6.addEventListener("click", disableQ5);

q6a1.addEventListener("click", disableQ6);
q6a2.addEventListener("click", disableQ6);
q6a3.addEventListener("click", disableQ6);
q6a4.addEventListener("click", disableQ6);
q6a5.addEventListener("click", disableQ6);
q6a6.addEventListener("click", disableQ6);

function disableQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
  q1a3.disabled = true; 
  q1a4.disabled = true;
  q1a5.disabled = true;
  q1a6.disabled = true;
}

function disableQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true; 
  q2a3.disabled = true;
  q2a4.disabled = true;
  q2a5.disabled = true;
  q2a6.disabled = true;
}

function disableQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true; 
  q3a3.disabled = true; 
  q3a4.disabled = true;
  q3a5.disabled = true;
  q3a6.disabled = true;
}

function disableQ4() {
  q4a1.disabled = true; 
  q4a2.disabled = true; 
  q4a3.disabled = true; 
  q4a4.disabled = true; 
  q4a5.disabled = true;
  q4a6.disabled = true;
}

function disableQ5() {
  q5a1.disabled = true; 
  q5a2.disabled = true; 
  q5a3.disabled = true; 
  q5a4.disabled = true;
  q5a5.disabled = true;
  q5a6.disabled = true; 
}

function disableQ6() {
  q6a1.disabled = true; 
  q6a2.disabled = true; 
  q6a3.disabled = true; 
  q6a4.disabled = true;
  q6a5.disabled = true; 
  q6a6.disabled = true;  
}

function enableQuestions(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q1a3.disabled = false; 
  q1a4.disabled = false; 
  q1a5.disabled = false;
  q1a6.disabled = false;
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q2a3.disabled = false; 
  q2a4.disabled = false;
  q2a5.disabled = false;
  q2a6.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;
  q3a3.disabled = false; 
  q3a4.disabled = false;
  q3a5.disabled = false;
  q3a6.disabled = false;
  q4a1.disabled = false; 
  q4a2.disabled = false;
  q4a3.disabled = false; 
  q4a4.disabled = false;
  q4a5.disabled = false;
  q4a6.disabled = false;
  q5a1.disabled = false; 
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;
  q5a5.disabled = false;
  q5a6.disabled = false;
  q6a1.disabled = false; 
  q6a2.disabled = false;
  q6a3.disabled = false;
  q6a4.disabled = false;
  q6a5.disabled = false;
  q6a6.disabled = false;
}
