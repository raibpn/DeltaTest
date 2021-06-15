const mongoose = require('mongoose');

//user Schema
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lasName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});


const User = mongoose.model('user', userSchema)

module.exports = User;