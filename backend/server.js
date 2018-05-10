const express = require('express');
const app = express();
const BlogPost = require('./models/blogpost');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/blogposts', function (req, res) {
    console.log('received a GET request!');
    console.log('request body is', req.body);
    BlogPost.find({}, function (err, blogPosts) {
        if (err) res.send(err);
        else res.json(blogPosts);
    });
});

app.post('/blogposts', function (req, res) {
    console.log('received a POST request!');
    console.log('request body is', req.body);
    BlogPost.create(req.body, function (err, blogpost) {
        if (err) res.send(err);
        else res.json(blogpost);
    });
});

app.listen(3000);