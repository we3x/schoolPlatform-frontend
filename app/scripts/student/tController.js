'use strict'

module.exports = [
  '$scope',
  'texts',
  '$sce',
  'studentService',
  function tController($scope, texts, $sce, studentService){
    $scope.texts = texts.data;
    $scope.getComment = function(){
      studentService.getComment($scope.current.id).then(function(result){
      $scope.comments = result.data;
    })
    }
    $scope.getCurrent = function(text){
      $scope.current = text;
      $scope.ctext = $sce.trustAsHtml($scope.current.text)
      $scope.getComment()
    }
    $scope.current = $scope.getCurrent($scope.texts[0])
    $scope.saveComment = function(comment){
      $http.post(API_URL + 'comments/', {writer:$window.sessionStorage.id, text:$scope.current.id, comment:comment}).then(function(){
      $scope.getComment()
      $scope.comment = ''
      })
    }
  }
];
