require('dotenv').config();

const express = require('express');

const app = express();

const hostname = process.env.HOST;

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('welcome to pearl server');
});

app.listen(port, () =>{
  console.log(`server running at http:${hostname}: ${port}/`);
  console.log(`press ctrl + C to stop server.`);
  console.log(`press ctrl + R to restart server.`);
  console.log(`waiting for requests...`);
})