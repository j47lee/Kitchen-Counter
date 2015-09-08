var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var bcrypt 			 = require('bcrypt-nodejs');

// user Schema
var UserSchema	= new Schema({
	 	name				: String
	, email				: { type: String, required: true, index: { unique: true }}
	,	password		: { type: String, required: true, select: false }
	,	ingredient	: [{
					name		 : String
				, quantity : Number
				, unit		 : String //grams or liters
				, expiry	 : { type: Date, default: null }
			}]
	, groceryList	: [ { type: String } ]
});

// hash the password before the user is saved
UserSchema.pre('save', function(next) {
	var user = this;

	// hash the password only if the password has been changed or user is new
	if (!user.isModified('password')) return next();

	// generate the hash
	bcrypt.hash(user.password, null, null, function(err, hash) {
		if (err) return next(err);

		// change the password to the hashed version
		user.password = hash;
		next();
	});
});

// method to compare a given password with the database hash
UserSchema.methods.comparePassword = function(password) {
	var user = this;

	return bcrypt.compareSync(password, user.password);
};

module.exports = mongoose.model('User', UserSchema);
