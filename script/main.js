// 1. Stopwatch 

// Intializing stopwatch
stopwatch = document.getElementById("stopwatch");

// Creating the Time array
const time = [(seconds = 0), (minutes = 0)];

// Creating the interval
let myInterval ;

// Reset Stopwatch function
function resetStopwatch() {
  // Reset the minutes and seconds to zero do the same to the 
  // Clear the interval
  minutes=0;
  seconds=0;
  stopwatch.innerHTML = `${minutes}:${seconds}`;
  clearInterval(myInterval)

}

// Variable to check whether the end button was clicked or not to run or stop the stopwatch
let stopped = 0 ;

// Function to start the stopwatch
function runStopwatch() {
  // Start the interval for every second
  myInterval =   setInterval(() => {
      // If seconds is 60 and end button is not clicked run this
      if (seconds == 60 && stopped==0) {
          // Increment the minutes , change the seconds to zero and add the value to the
          minutes++;
          seconds = 0;
          stopwatch.innerHTML = `${minutes}:${seconds}`;
      }
      // If the seconds are lesser than 60 and the end button is not clicked run this 
      else if(seconds<60 && stopped ==0){
          // Increment the seconds and add the value to the
          seconds++;
          stopwatch.innerHTML = `${minutes}:${seconds}`;
      }
      // Run this if the end button is clicked
      else if(stop==1){
          return  
      }
  }, 1000);
}

// 2. Deciding on the type of question

// Array of the types of questions
const questions = ['operations','valuePercent','percentageApprox']

// Initializing a variable for the individual question
let question ;

// Function to select a  question from the array of questions
function questionSelector(){
  // Selecting a question from the array
  question = questions[Math.floor(Math.random()*questions.length)] ;
}

// Initializing the calculations div
let calculations = document.getElementById('calculations')

// 3. Finding values from percentages
function valuePercent () {
  // Creating a number and percentage value
  let numValue = Math.floor(Math.random() * 1000);
  let percentValue=Math.floor(Math.random() * 1000);
  // Doing the operation
  let resultValue = percentValue*numValue/100;
  // Inserting the values to the innerHTML
  calculations.innerHTML+=`
  <div class="nums valuePercent" id="num1">${percentValue}%</div>
  <div class="nums" id="operator">of</div>
  <div class="nums valuePercent" id="num2">${numValue}</div>
  <div class="nums valuePercent" id="result">${resultValue}</div>
  `
  // Updating the stopped and started conditions
  stopped=0;
  started=1;
}

// 4. Finding the percentage from 2 random values
function percentageApprox () {
  // Creating 2 random values 
  let num1Value = Math.floor(Math.random() * 1000);
  let num2Value=Math.floor(Math.random() * 1000);
  // Doing the calculation
  let resultValue = num1Value/num2Value*100
  // Inserting the values to the innerHTML
  calculations.innerHTML+=`
  <div class="nums percentageApprox" id="num1">${num1Value}</div>
  <div class="nums" id="operator">/</div>
  <div class="nums percentageApprox" id="num2">${num2Value}</div>
  <div id="equalsto" class="nums">=</div>
  <div class="nums percentageApprox" id="result">${resultValue.toFixed(2)}</div>
  `
  // Updating the started and stopped condition
  stopped=0;
  started=1;
}

// 5. Doing random operations on 2 values 

// Intializing numbers and result of the operation
let num1 ;
let num2 ;
let result ; 
let nums ;

// Creating numbers
function createNos() {
  // Creating 2 random numbers
  num1 = Math.floor(Math.random() * 100);
  num2 = Math.floor(Math.random() * 100);
}

// Initializing operator
let operator ;
let equalsto ;

// A variable for the operator
let op;

// An array containing the operators
let ops = ["+", "-", "x"];

// Selecting a random operator function
function selectOp() {
  // Selecting a random index from the array
  op = Math.floor(Math.random() * ops.length);
  // Assigning the index value as the operator
  operator = ops[op];
  // Giving value to equal to
  equalsto = '=' ;
}

// Started variables
let started = 0 ;

// Operation function
function operation() {
  // Updating the stopped and started variables
  stopped=0;
  started=1;
  // Selecting the operation based on the operator
  switch (op) {
    case 0:
      result = parseInt(num1) + parseInt(num2);
      break;
    case 1:
      result = parseInt(num1) - parseInt(num2);
      break;
    case 2:
      result = parseInt(num1) * parseInt(num2);
      break;
    default:
      console.log("Error");
  }
}

// Resetting the innerHTML of the calculations div
function resetResult(){
  calculations.innerHTML=''
}

// Inserting the result of the operation to the innerHTML
function operationResult(){
  calculations.innerHTML=`  
  <div class="nums" id="num1">${num1}</div>
  <div class="nums" id="operator">${operator}</div>
  <div class="nums" id="num2">${num2}</div>
  <div class="nums" id="equalsto" >${equalsto}</div>
  <div class="nums" id="result">${result}</div>`
}

// 6.Integrating and starting the operations

// Intializing start button
startBtn = document.getElementById("startBtn");


// Starting the operation
function startOperation() {
  // If the start button was clicked start the operation
  if(started==1){
    return ;
  }else if(started==0){
    questionSelector()
    switch(question){
      case 'operations':
        resetResult()
        // Creating the numbers
        createNos();
        // Selecting the operators
        selectOp();
        // Selecting the operation
        operation()
        // Resetting the stopwatch
        resetStopwatch()
        // Running the stopwatch
        runStopwatch()
        // Inserting the result to the innerHTML
        operationResult()
      break;
      case 'valuePercent' :
        // Resetting the value
        resetResult()
        // Calcultaing the value from the percentage
        valuePercent();
        // Resetting the stopwatch
        resetStopwatch()
        // Running the stopwatch
        runStopwatch()
      break;
      case 'percentageApprox' :
        // Resetting the result
        resetResult()
        // Calculating the percentage from the values
        percentageApprox()
        // Resetting the stopwatch
        resetStopwatch()
        // Running the stopwatch
        runStopwatch()
      break;
      default:
      console.log('Error in operation');
    }
  }
}

// Adding listener to start button
startBtn.addEventListener("click", (e) => {
    startOperation();
});

// End button initialization
endBtn = document.getElementById("endBtn");

// End button function
endBtn.addEventListener("click", (e) => {
  // Updated the started and stopeed conditions
    stopped = 1 ;
    started=0 ; 
});
