
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

// // Define a GET route on our server:
// app.get('/i', (req, res) => {
//   console.log('GET /');
//   res.send();
// })

// // Define a POST route on our server:
// app.post('/', (req, res) => {
//   console.log('POST /');
//   let newInstrument = req.body;
//   musicalInstruments.push(newInstrument);
//   res.sendStatus(200);
// })



