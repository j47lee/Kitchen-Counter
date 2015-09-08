var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
// var bcrypt 			 = require('bcrypt-nodejs');

// recipe schema
var RecipeSchema    = new Schema({
        title           : String
    , imageUrl          : String
    , ingredients       : [{
                  name    : String
              , qty       : Number
              , unit      : String //grams or liters
              }]
    , prep_time         : String
    , cook_time         : String
    , directions        : String
    , user_id           : Number //_id of user who created the recipe
});


module.exports = mongoose.model('Recipe', RecipeSchema);
