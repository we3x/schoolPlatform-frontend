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
    function texts(subject_id){
      return $http.get(API_URL + 'subjects/' + subject_id + '/texts/');
    }
    function note(class_id){
      return $http.get(API_URL + 'classes/' + class_id + '/notify/');
    }
    return {
      getNote: note,
      getMe: me,
      getSubjects: subjects,
      getTexts: texts
    };

  }
];
