'use strict';

module.exports = [
  '$http',
  'API_URL',
  '$q',
  '$window',
  function loginService($http, API_URL, $q, $window) {

    function attachToken(token) {
      $http.defaults.headers.common.Authorization = 'JWT ' + token;
    }

    function authenticate(token) {
        attachToken(token);
        $window.sessionStorage.oneloveAuthToken = token;
    }

    function isLoggedIn() {
      return $window.sessionStorage.oneloveAuthToken;
    }

    function logIn(user) {
      return $http.post(API_URL + 'auth/', user)
        .success(function(data) {
          authenticate(data.token);
        }).error(function(err){
          $window.location.reload();
        })
    }


    return {
      logIn: logIn,
      attachToken: attachToken,
      isLoggedIn: isLoggedIn,
    };
  }
];
