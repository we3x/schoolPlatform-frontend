'use strict'

module.exports = [
  'API_URL',
  '$http',
  function professorService(API_URL, $http){
    function getSubjects(id){
      return $http.get(API_URL + 'professor/' + id + '/subjects/');
    }
    function putText(text){
      return $http.post(API_URL + 'text/', text);
    }
    return {
      getSubjects: getSubjects,
      putText: putText
    }
  }
];
