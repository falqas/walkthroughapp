var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/blogPostApp", {
	useMongoClient: true
})
  .then(() => console.log('Mongodb connected...'))
  .catch(err => console.log(err));
