var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String,  
  },
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String,
  },
});

// //authenticate input against database documents
// UserSchema.statics.authenticate = (email, password, callback) => {
//   User.findOne({ email: email })
//     .exec(function (error, user) {
//       if (error) {
//         return callback(error);
//       } else if ( !user ) {
//         var err = new Error('User not found.');
//         err.status = 401;
//         return callback(err);
//       }

//       bcrypt.compare(password, user.password, function(error, result) {
//         if (result === true) {
//           return callback(null, user);
//         } else {
//           return callback();
//         }
//       }); //end of bcrpyt.compare
//     }); // end of User.findOne
// }

// //hash password before saving
// UserSchema.pre('save', (next) => {
//   var user = this;
//   bcrypt.hash(user.password, 10, function(err, hash) {
//     if (err) {
//       return next(err);
//     }

//     user.password = hash;
//     next();
//   });
// });

var User = mongoose.model('User', UserSchema);
module.exports = User;
