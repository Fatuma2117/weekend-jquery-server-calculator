$(document).ready(onReady)




function onReady(){
$('.mathOp').on('click', mathButton)
 $('#equalButton').on('click', createEquation)
 $('#clearButton').on('click', cButton)
}

let mathOperator;

// function onEquals(){
// let calcObject = {
// numOne: $('#numOne').val(),
// numTwo: $('#numTwo').val(),
// operator: mathOperator
// }
// console.log(calcObject) 
// createEquation()
// }


// sending object to server side calls renderHistory
function createEquation() {
  let calcObject = {
numOne: $('#numOne').val(),
numTwo: $('#numTwo').val(),
operator: mathOperator
  }
    $.ajax({
      method: 'POST',
      url: '/calculation',
      data: calcObject
    })
    .then (function (response) {
        console.log(response);
        renderHistory();
      })
 
  }
  
function cButton(){
  $('input').val(''); 
}

function mathButton() {
// console.log($(this).text())
mathOperator = $(this).text()



}


function renderHistory(){
  $.ajax({
    method: 'GET',
    url: '/calculation'
  })
    .then(function (response) {
      console.log('the server sent me something!');
      console.log(response);

      for (let equation of response) {
        $('#history').append(`
          <li>${equation.numOne} ${equation.operator} ${equation.numTwo} = ${equation.total}</li>
        `)
      }
    })
}
