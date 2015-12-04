'use strict'

module.exports = [
  'API_URL',
  '$http',
  function studentService(API_URL, $http){
    function me(){
      return $http.get(API_URL + 'me/');
    }
    function subjects(class_id){
      return $http.get(API_URL + 'classes/' + class_id + '/subjects/');
    }
    function texts(class_id){
      return $http.get(API_URL + 'classes/' + class_id + '/texts/');
    }
    return {
      me: me,
      subjects: subjects,
      texts: texts
    };

  }
];