// BASIC SETUP
// ======================================================
// CALL PACKAGES ------------------------------------------
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var port        = process.env.PORT || 8080;
var config      = require('./config');

// path module handles and transforms file paths (used for Angular routing)
var path        = require('path');

// APP CONFIGURATION ---------------------------------------
// use body parser to grab info from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// handle CORS requests
app.use(function(req,res,next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Origin', 'GET, POST');
  res.setHeader('Access-Control-Allow-Origin', 'X-Requested-With, content-type, Authorization');
  next();
});

// log requests to the console
app.use(morgan('dev'));

// connect to database (mongolab.com)
mongoose.connect(config.database);

//public folder serving public assets
//used for requests from frontend
app.use(express.static(__dirname + '/public'));

// API ROUTES
// =====================================================
var apiRoutes = require('./app/routes/api.js')(app, express);
app.use('/api', apiRoutes);

//MAIN CATCHALL ROUTE ---------------------------------------------
// SEND USERS TO FRONTEND ---------------------------------
// registered after API ROUTES
// root route to index.html file ('*' wildcard method)
app.get('*', function(req,res){
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// SERVER SETUP
// ================================================================
app.listen(config.port);
console.log('We are listening to PORT: ' + port);
