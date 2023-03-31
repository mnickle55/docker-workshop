// app.js
const express = require('express');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);

const app = express();
const PORT = 8080;

app.use(express.json());
app.get('/', function(req, res) {

    res.status(200).send(`My API is up and running Yo!”`)
  
});

app.get('/', function(req, res) {
  res.status(200).send(`My API is up and running Yo!"`)

});
app.get('/test', function(req, res) {
  knex
    .select('*')
    .from('authors')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});



app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});