const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BlogSchema = new Schema({
  title: String,
  image: String,
  body: String,
  created: { type: Date, default: Date.now }
});

module.exports = Blog = mongoose.model('Blog', BlogSchema);
