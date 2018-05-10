const express = require('express');
const app = express();
const BlogPost = require('./models/blogpost');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

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