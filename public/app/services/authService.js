angular.module('authService', [])

// =====================================
// auth factory to login and get info
// inject $http for communicating with API
// inject $q to return promist objects
// inject AuthToken to manage tokens
// ====================================
.factory('Auth', function($http, $q, AuthToken){

  //create auth factory object
  var authFactory = {};

  //handle login

  //handle logout

  //check if a user is logged in

  //get the user info

  //return auth factory objects
  return authFactory;

})//end Auth factory

// ====================================
// factory for handling tokens
// inject $window to store token client-side
// ====================================
.factory('AuthToken', function($window){

  var authTokenFactory = {};

  // get the token out of the local storage
  authTokenFactory.getToken = function(){
    return $window.localStorage.getItem('token')
  };

  // function to set token or clear token
  // if a token is passed, set the token
  // if there is no token, clear it from local storage
  authTokenFactory.setToken = function(token){
    if (token)
      $window.localStorage.setItem('token', token)
    else
      $window.localStorage.removeItem('token');
  };

  return authTokenFactory;
})//end AuthToken factory

// ====================================
// application configuration to integrate token into every request
// ====================================
.factory('AuthInterceptor', function($q, AuthToken){

  var interceptorFactory = {};

  // attach the token to every request

  //redirect if a token doesnt authenticate

  return interceptorFactory;
})//end AuthInterceptor factory
