
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
  let resultObject ={
numOne: calcObject.numOne,
numTwo: calcObject.numTwo,
operator: calcObject.operator,
total: answer
  }

//
  switch (calcObject.operator) {
    case '+':
      answer =  Number(calcObject.numOne) + Number(calcObject.numTwo)
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
}



app.get('/calculation', (req, res) => {
  console.log('GET /calculation');
  res.send(history);
})

// receives object pushes into rew array
app.post('/calculation', (req, res) => {
  console.log('POST /calculation');
  console.log(req.body)
  calcObject = req.body;
endEquation();
  // history.push( );
  res.sendStatus(200);
})






