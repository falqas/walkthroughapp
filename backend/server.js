const express = require('express');
const app = express();
const BlogPost = require('./models/blogpost');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/blogposts', function (req, res) {
  console.log('get works!')
});

app.post('/blogposts', function (req, res) {
  console.log('post works!')
  console.log(req.body)
});


app.listen(3000);