var bodyParser = require('body-parser');
var user = require('../models/user');
var jwt = require('jsonwebtoken');
var config = require('../../config');

var superSecret = config.secret;

module.exports = function(app, express){

  // API ROUTES
  // =====================================================
  // instance of express router for API routes
  var apiRouter = express.Router();

  //jsonwebtoken to authenticate API route
  apiRouter.route('/authenticate')

    .post(function(req,res){
      User.findOne({
        email: req.body.email
      }).select('fname lname email password').exec(function(err,user){
        if(err) throw err;

        //no user with that email was found
        if(!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.'});
        } else if(user){
            // if user found we check if pw matches
            var validPassword = user.comparePassword(req.body.password);

            if (!validPassword){
                res.json({ success: false, message: 'Authentication failed. Password is invalid'});
            } else {
                //if user is found and pw is valid
                //create a token
                var token = jwt.sign({
                  fname: user.fname,
                  lname: user.lname,
                  email: user.email
                }, superSecret, {
                  expiresInMinutes: 1440 // expires in 24 hours
                });
                // return the info including the token as JSON
                res.json({
                  success: true,
                  message: 'successfully generated token',
                  token: token
                });
            }
        }
      });
    }) //end .post

  // API middleware for all requests
  apiRouter.use('/', function(req,res,next){

    // check head or url parameters or post parameters for token
    var token = req.body.token || req.param('token') || req.headers['x-access-token'];

    //decode the token if provided
    if(token){
        //verify secret and checks exp
        jwt.verify(token, superSecret, function(err, decoded){
            if(err){
                return res.status(403).send({ success: false, message: 'Failed to authenticate token'});
            } else {
                //token checks out, we save the the decoded request to be used on other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return message error to user
        return res.status(403).send({ success: false, message:'No token was provided'});
    }

  }); //end API middleware

  // /api route
  apiRouter.get('/', function(req,res){
    res.json({ message: 'Welcome to the API for Kitchen Counter!' });
  });

  // /api/users route
  apiRouter.route('/users')

    // create a user @ /api/users
    .post(function(req,res){
      var user = new User();

      user.fname = req.body.fname;
      user.lname = req.body.lname;
      user.email = req.body.email;
      user.password = req.body.password;

      // save the user and check for errors
      user.save(function(err){
        if(err){

          //duplicate entry
          if(err.code == 11000)
            return res.json({ success: false, message: 'A user with that email already exists.'});
          else
            return res.send(err);
        }
        res.json({ message: 'User successfully created.'})
      });
    }) //end .post

    // C-READ-U-D //get all users
    .get(function(req,res){
      User.find(function(err,users){
        if(err) res.send(err);

        //return all users if no error
        res.json(users);
      });
    }) //end .get


  apiRouter.route('/users/:user_id')

    // C-READ-U-D //get a single user
    .get(function(req,res){
      User.findById(req.params.user_id,function(err,user){
        if(err) res.send(err);

        //return single user if no error
        res.json(user)
      });
    })

    // C-R-Update-D //update a single user
    .put(function(req,res){
      User.findById(req.params.user_id, function(err,user){

        if(err) res.send(err);

        //check if there are changes to the user
        if(req.body.fname) user.fname = req.body.fname;
        if(req.body.lname) user.lname = req.body.lname;
        if(req.body.email) user.email = req.body.email;
        if(req.body.password) user.password = req.body.password;

        // save the user changes if there are changes
        user.save(function(err){
          if(err) res.json(err);

          //return message successfully updated user
          res.json({ message: 'User successfully updated' });
        });
      });
    }) //end .put

    .delete(function(req,res){
      User.remove({_id: req.params.user_id}, function(err,user){
        if(err) res.send(err);
        res.json({ message: 'User successfully deleted'});
      });
    })

  return apiRouter;

};//end module.exports
