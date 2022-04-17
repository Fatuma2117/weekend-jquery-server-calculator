
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
let answer;

function endEquation (){

  
//created a new object with keys of num1,num2, operator, total 
//with a new key(total) for answer value from switch 



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
    
  } //created a new object with keys of num1,num2, operator, total 
  //with a new key(total) for answer value from switch 
  let resultObject = {
    numOne: calcObject.numOne,
    numTwo: calcObject.numTwo,
    operator: calcObject.operator,
    total: answer
      }

  console.log(answer)
  // console.log(resultObject)
history.push(resultObject)
//  // push the resultObject into new global array
 console.log(history)
}

// defines post route and takes data from math function
app.post('/calculation', (req, res) => {
  console.log('POST /calculation');
  console.log(req.body)
  //request from server.body = a new variable
  calcObject = req.body;
  //calls the function that does the math calculations
endEquation();
  // sends back ok 
  res.sendStatus(200);
})

//defined get route 
//sends the history array as response to renderHistory
app.get('/calculation', (req, res) => {
  console.log('GET /calculation');
  res.send(history);
})




