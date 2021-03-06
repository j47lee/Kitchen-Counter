var bodyParser = require('body-parser'); 	// get body-parser
var User       = require('../models/user');
var Recipe       = require('../models/recipe');
var jwt        = require('jsonwebtoken');
var config     = require('../../config');

// super secret for creating tokens
var superSecret = config.secret;

module.exports = function(app, express) {

	var apiRouter = express.Router();

	// route to authenticate a user (POST http://localhost:8080/api/authenticate)
	apiRouter.post('/authenticate', function(req, res) {

	  // find the user
	  User.findOne({
	    email: req.body.email
	  }).select('name email password').exec(function(err, user) {

	    if (err) throw err;

	    // no user with that email was found
	    if (!user) {
	      res.json({
	      	success: false,
	      	message: 'Authentication failed. User not found.'
	    	});
	    } else if (user) {

	      // check if password matches
	      var validPassword = user.comparePassword(req.body.password);
	      if (!validPassword) {
	        res.json({
	        	success: false,
	        	message: 'Authentication failed. Wrong password.'
	      	});
	      } else {

	        // if user is found and password is right
	        // create a token
	        var token = jwt.sign({
	        	name: user.name,
	        	email: user.email,

	        }, superSecret, {
	          expiresInMinutes: 1440 // expires in 24 hours
	        });

	        // return the information including token as JSON
	        res.json({
	          success: true,
						_id: user._id,
	          message: 'Token successfully created.',
	          token: token
	        });
	      }

	    }

	  });
	});

	// USER API ROUTES =============================================================================
	// on route that end in /users (above token middleware)
	// create user before route middleware so no need for token auth
	// -------------------------------------------------------------------------------------
	apiRouter.route('/users')

		// create a user (accessed at POST http://localhost:8080/users)
		.post(function(req, res) {

			var user = new User();		// create a new instance of the User model
			user.name = req.body.name;  // set the users name (comes from the request)
			user.email = req.body.email;  // set the users email (comes from the request)
			user.password = req.body.password;  // set the users password (comes from the request)

			user.save(function(err) {
				if (err) {
					// duplicate entry
					if (err.code == 11000)
						return res.json({ success: false, message: 'A user with that email already exists. '});
					else
						return res.send(err);
				}

				// return a message
				res.json({ message: 'User successfully created!' });
			});

		});

	// route middleware to verify a token
	apiRouter.use(function(req, res, next) {
		// do logging
		console.log('Somebody just visited the app.');

	  // check header or url parameters or post parameters for token
	  var token = req.body.token || req.param('token') || req.headers['x-access-token'];

	  // decode token
	  if (token) {

	    // verifies secret and checks exp
	    jwt.verify(token, superSecret, function(err, decoded) {

	      if (err) {
	        res.status(403).send({
	        	success: false,
	        	message: 'Failed to authenticate token.'
	    	});
	      } else {
	        // if everything is good, save to request for use in other routes
	        req.decoded = decoded;

	        next(); // make sure we go to the next routes and don't stop here
	      }
	    });

	  } else {

	    // if there is no token
	    // return an HTTP response of 403 (access forbidden) and an error message
   	 	res.status(403).send({
   	 		success: false,
   	 		message: 'No token provided.'
   	 	});

	  }
	});

	// accessed at GET http://localhost:8080/api
	apiRouter.get('/', function(req, res) {
		res.json({ message: 'Welcome to the API' });
	});

	// on routes that end in /users (continued)
	// --------------------------------------------------------------------------------------
	apiRouter.route('/users')

		// get all the users (accessed at GET http://localhost:8080/api/users)
		.get(function(req, res) {

			User.find({}, function(err, users) {
				if (err) res.send(err);

				// return the users
				res.json(users);
			});
		});

	// on routes that end in /users/:user_id
	// --------------------------------------------------------------------------------------------
	apiRouter.route('/users/:user_id')

		// get the user with that id
		.get(function(req, res) {

			User.findById(req.params.user_id, function(err, user) {
				if (err) res.send(err);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

					//CREATING ARRAY OF MY INGREDIENTS FROM USER OBJECT ====================
					var myIngredientsArray = [];
					myIngredients = user.ingredients
					for (var k = 0; k < myIngredients.length; k++) {
					  myIngredientsArray.push(myIngredients[k].name)
					}
					// console.log('CURRENT USER INGREDIENTS', myIngredientsArray);

					//COMPARE FUNCTION ===========================================================
					function check(arr) {
					    var totalmatches = 0;
					    for (i = 0; i < myIngredientsArray.length; i++) {
					        for (j = 0; j < arr.length; j++) {

					            if (myIngredientsArray[i] == arr[j]) {

					                // console.log('MATCHES', myIngredientsArray[i], arr[j]);
					                totalmatches++;

					            } else {
					                // console.log('NO MATCH', myIngredientsArray[i], arr[j]);
					            } //end if-statement

					        } //end for-loop on 'arr' (which is an array of each recipe's ingredients)
					    } //end for-loop on myIngredientsArray


					    if (totalmatches/arr.length === 1) {
									console.log('Recipe is 100% match');
									// user.matches.push(recipes[i].title);
					    }
							else if (totalmatches/arr.length >= 0.8) {
					        console.log("Recipe is >= 80% match");
					    } else if (totalmatches/arr.length >= 0.5) {
					        console.log("Recipe is >= 50% match");
					    } else {
					        console.log('Recipe does not match');
					    }
					}

					//FIND ALL RECIPES AND RUN COMPARE FUNCTION =========================================
					Recipe.find({}, function(err, recipes) {
						if (err) res.send(err);

								//QUERY ALL RECIPES =============================================================
								var ingredientsArray = [];
										//grabbing each recipe
										for (var i = 0; i < recipes.length; i++) {
										    eachRecipeIngredients = recipes[i].ingredients
										    // console.log(eachRecipeIngredients);
										    for (var j = 0; j < eachRecipeIngredients.length; j++) {
										      eachIngredient = eachRecipeIngredients[j].name
										      // console.log(eachRecipeIngredients[j].name);
										      ingredientsArray.push(eachIngredient)
										    }
										      // console.log(ingredientsArray);

										    ///////// COMPARE MY INGREDIENTS WITH EACH RECIPE HERE ////////////////
										    	check(ingredientsArray);
													console.log('---->',recipes[i].title);

													// not working... MAKE PUSH ONLY ON MATCH ////
													user.matches.push(recipes[i].title);
													// console.log('---------',user.matches);
													// console.log(user);

										    	ingredientsArray = [];

										} //end for-loop on allRecipes



				// console.log(user);
				// return that user
				res.json(user);

					}); //end Recipe.find{}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

			});
		})

		// update the user with this id
		.put(function(req, res) {
			User.findById(req.params.user_id, function(err, user) {

				if (err) res.send(err);

				// set the new user information if it exists in the request
				if (req.body.name) user.name = req.body.name;
				if (req.body.email) user.email = req.body.email;
				if (req.body.password) user.password = req.body.password;
				if (req.body.ingredients) user.ingredients = req.body.ingredients;
				console.log("++++++++++",user);
				// save the user
				user.save(function(err) {
					if (err) res.send(err);

					// return a message
					res.json({ message: 'Successfully updated.' });
				});

			});
		})

		// delete the user with this id
		.delete(function(req, res) {
			User.remove({
				_id: req.params.user_id
			}, function(err, user) {
				if (err) res.send(err);

				res.json({ message: 'User successfully deleted.' });
			});
		});

	// api endpoint to get user information
	apiRouter.get('/me', function(req, res) {
		res.send(req.decoded);
	});

	// RECIPE API ROUTES =================================================================
	// on routes that end in /recipes
	// --------------------------------------------------------------------------------------
	apiRouter.route('/recipes')

		// get all the recipes (accessed at GET http://localhost:8080/api/users)
		.get(function(req, res) {

			Recipe.find({}, function(err, recipes) {
				if (err) res.send(err);

				// return the recipes
				res.json(recipes);
			});
		});

		// on routes that end in /recipes/:recipe_id
		// --------------------------------------------------------------------------------------------
		apiRouter.route('/recipes/:recipe_id')

			// get the recipe with that id
			.get(function(req, res) {
				Recipe.findById(req.params.recipe_id, function(err, recipe) {

					if (err) res.send(err);

					// return that recipe
					res.json(recipe);
				});
			})



	return apiRouter;
};
