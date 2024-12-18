const mongoose = require('mongoose');  

const userSchema = new mongoose.Schema({  
  username: String,  
  password: String,  
  // Other fields  
});  

module.exports = mongoose.model('User', userSchema);  
