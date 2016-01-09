'use strict'

module.exports = [
  '$scope',
  'texts',
  '$sce',
  'studentService',
  '$window',
  function tController($scope, texts, $sce, studentService, $window){
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
      studentService.saveComment({writer:$window.sessionStorage.id, text:$scope.current.id, comment:comment}).then(function(){
      $scope.getComment()
      $scope.comment = ''
      })
    }
  }
];
