$(document).ready(onReady)


function onReady(){
$('.mathOp').on('click', mathButton)
 $('#equalButton').on('click', createEquation)
 $('#clearButton').on('click', cButton)
}

let mathOperator;

// sending calObject to server side and calls renderHistory
function createEquation() {
  let calcObject = {
numOne: $('#numOne').val(),
numTwo: $('#numTwo').val(),
// object property is the value of the global variable
operator: mathOperator
  }
    $.ajax({
      method: 'POST',
      url: '/calculation',
      // sending the value of the object to server
      data: calcObject
    })
    .then (function (response) {
        console.log(response);
        // calls renderHistory when createEquation runs
        renderHistory();
      })
 
  }
  // clears inputs with button click
function cButton(){
  $('input').val(''); 
}
// global variable mathOperator is set equal to (this) 
//which is the math operator text when clicked. ie '+'
function mathButton() {
// console.log($(this).text())
mathOperator = $(this).text()
}

// sends get request to server and then appends response to DOM
function renderHistory(){
  $.ajax({
    method: 'GET',
    url: '/calculation'
  }) // uses response as a parameter, loops through response  
    .then(function (response) {
       console.log(response);
      for (let equation of response) {
        $('#history').append(` 
          <li>${equation.numOne} ${equation.operator} ${equation.numTwo} = ${equation.total}</li>
        `)
       
      }
    })
}
