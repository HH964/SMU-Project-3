var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true
  },
  password: {
    type: String
  },
  facebookID: {
    type: String
  },
  name: {
    type: String
  }
});
var User = mongoose.model('User', UserSchema);
module.exports = User;