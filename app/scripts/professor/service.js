'use strict'

module.exports = [
  'API_URL',
  '$http',
  '$window',
  function professorService(API_URL, $http, $window){
    function getSubjects(id){
      return $http.get(API_URL + 'professor/' + id + '/subjects/');
    }
    function putText(text){
      return $http.post(API_URL + 'text/', text);
    }
    function logOut() {
      delete $http.defaults.headers.common.Authorization;
      delete $window.sessionStorage.oneloveAuthToken;
      delete $window.sessionStorage.me;
      delete $window.sessionStorage.id;
      delete $window.sessionStorage.need;
      delete $window.sessionStorage.username;
    }
    return {
      getSubjects: getSubjects,
      putText: putText,
      logOut: logOut
    }
  }
];
