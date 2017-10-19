const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

const bodyParser = require('body-parser')

const path = require('path')

require('dotenv').config()



var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'hbs');


app.get('/', (req,res)=>{
  res.render('index',{
    title: 'gSecrets',
    mtitle: 'Galvanize Secrets',
    content: 'You must login or create an account to keep secrets!'
  })
})

app.listen(port, ()=> {
  console.log('listening on: ', port);
})

module.exports = app;
