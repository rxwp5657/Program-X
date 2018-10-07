const express = require('express');
const cors = require('cors');
const knex = require('knex');
const app = express();

db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'charles',
    password : '',
    database : 'programx'
  }
});

app.use(cors());

app.get('/exercises', (req, res) => {
  db.select('*').from('exercises').then(data => {
    res.json(data);
  });
});

app.get('/news', (req, res) => {
  db.select('*').from('news').then(data => {
    res.json(data);
  });
});

app.get('/problem/:id', (req, res) => {
  const {id} = req.params;

  db.select('*').from('exercise').where('id',id).then(data => {
    res.json(data[0]);
  });
});

app.listen(3500, ()=> {
  console.log("server is running on port 3500");
});
