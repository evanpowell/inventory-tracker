const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database/schema');

const app = express();

app.use(bodyParser.json());

app.get('/test', (req, res) => {
  res.send('test passed');
})

app.post('/login', (req, res) => {
  console.log('hey');
  res.send(req.query);
})

module.exports = app;