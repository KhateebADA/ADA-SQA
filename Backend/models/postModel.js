const mongoose = require('mongoose');  

const postSchema = new mongoose.Schema({  
  title: String,  
  content: String,  
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  
  // Other fields  
});  

module.exports = mongoose.model('Post', postSchema);  
