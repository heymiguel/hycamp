var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String,  
  },
  github: {
    id: String,
    token: String,
    email: String,
    name: String,
    avatar: String,
  },
  favoriteEvents: Array,
  admin: Boolean,
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
