
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('./server/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5000;

app.listen(PORT, function() {
  console.log(`The server is running! localhost:${PORT}`);
})



let history = [];
let calcObject;


function endEquation (){

  let answer;
//created a new object with values of num1,num2, operator, total 
//with a new key(total) for answer value from switch 

  let resultObject ={
numOne: calcObject.numOne,
numTwo: calcObject.numTwo,
operator: calcObject.operator,
total: answer
  }

//  the value of the operator is compared with values of each case
//
  switch (calcObject.operator) {
    case '+':
     answer  =  Number(calcObject.numOne) + Number(calcObject.numTwo)
      break;
    case '-':
      answer = Number(calcObject.numOne) - Number(calcObject.numTwo) 
      break;
      case '*':
        answer = Number(calcObject.numOne) * Number(calcObject.numTwo) 
      break;
     case '/':
      answer = Number(calcObject.numOne) / Number(calcObject.numTwo) 
       break;
  }
history.push(resultObject)
 // push the resultObject into new array
 console.log(history)
}

// defines post route and takes data from math function
app.post('/calculation', (req, res) => {
  console.log('POST /calculation');
  console.log(req.body)
  calcObject = req.body;
  //calls the function that does the math calculations
endEquation();
  // history.push();
  // sends back ok 
  res.sendStatus(200);
})

//defined get route and sends the history array as response
app.get('/calculation', (req, res) => {
  console.log('GET /calculation');
  res.send(history);
})




