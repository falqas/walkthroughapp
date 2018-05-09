var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blogPostApp", {
	useMongoClient: true
})
  .then(() => console.log('Mongodb connected...'))
  .catch(err => console.log(err));

var BlogPostSchema = new Schema({
	title: String, 
	content: String
});

var BlogPost = mongoose.model('BlogPost', BlogPostSchema);

module.exports = BlogPost;