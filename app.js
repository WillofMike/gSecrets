const express = require('express');

const app = express();

const port = 3000;

const bodyParser = require('body-parser')

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'hbs');


app.get('/', (req,res)=>{
  res.render('index',{
    title: 'gSecrets'
  })
})

app.listen(port, ()=> {
  console.log('listening on: ', port);
})
