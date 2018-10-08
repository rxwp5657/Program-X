const express = require('express');
const cors = require('cors');
const knex = require('knex');
const bodyParser = require('body-parser');
const util = require('util');
const fs = require('fs');
const exec = util.promisify(require('child_process').exec);
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
app.use(bodyParser.json());

async function runCode() {
  const { stdout, stderr } = await exec('node solution.js');
  return stdout;
}

const prepareFile = (data) =>{
  fs.writeFile('solution.js', data, (err) => {
    if(err){
      console.log(err);
    }
  });
}

app.post('/code', async (req, res) => {
  let {code, id} = req.body;
  prepareFile(code);
  let result = await runCode();
  let {solution} = await db.select('solution').from('exercise').where('id',id.trim()).then(data => data[0]);
  if(result.trim() === solution.trim()){
    res.json({solution: solution, result: result});
  }
  else {
    res.json({solution: "Your code didn't pass the test", result: result.trim()});
  }
});

app.listen(4000, () => {
  console.log("server running on port 4000");
});
