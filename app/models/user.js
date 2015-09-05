var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

// user Schema
var UserSchema	= new Schema({
		fname    		: String
	,	lname    		: String
	,	email    		: { type: String, required: true, unique: true }
	,	password		: { type: String, required: true, select: false }
	,	ingredient	: [{
					name		 : String
				, quantity : Number
				, unit		 : String //grams or liters
				, expiry	 : { type: Date, default: null }
			}]
	, groceryList	: [ { type: String } ]
});

// hash password before saving user
UserSchema.pre('save', function(next){
  var user = this;

  // hash the pw only if the pw has been changed or the user is new
  if(!user.isModified('password')) return next();

  // generate salt
  bcrypt.hash(user.password, null, null, function(err,hash){
    if(err) return next(err);

    // change the pw to the hashed version
    user.password = hash;
    next();
  });
});

// method to compare a given pw with db hash
UserSchema.methods.comparePassword = function(password){
  var user = this;
  return bcrypt.compareSync(password, user.password);
};

// return the user model
module.exports = mongoose.model('User', UserSchema);
