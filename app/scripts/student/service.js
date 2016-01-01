'use strict'

module.exports = [
  'API_URL',
  '$http',
  '$window',
  function studentService(API_URL, $http, $window){
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
    function putNote(text, id){
      var tmp = parseInt(text.writer);
      return $http.put(API_URL + 'notify/' + text.id + '/', {writer: tmp, note: text.note, class_id:id});
    }
    function postNote(text, writer, id){
      var tmp = parseInt(writer);
      return $http.post(API_URL + 'notify/', {writer: tmp, note: text, class_id:id});
    }
    function deleteNote(text){
      return $http.delete(API_URL + 'notify/' + text.id + '/');
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
      getNote: note,
      getMe: me,
      getSubjects: subjects,
      getTexts: texts,
      putNote: putNote,
      deleteNote: deleteNote,
      postNote: postNote,
      logOut: logOut
    };

  }
];
