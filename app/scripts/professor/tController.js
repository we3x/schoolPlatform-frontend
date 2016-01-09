'use strict'

module.exports = [
  '$scope',
  'texts',
  '$sce',
  'professorService',
  '$window',
  function tController($scope, texts, $sce, professorService, $window){
    $scope.texts = texts.data;
    $scope.getComment = function(){
      professorService.getComment($scope.current.id).then(function(result){
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
      professorService.saveComment({writer:$window.sessionStorage.id, text:$scope.current.id, comment:comment}).then(function(){
      $scope.getComment()
      $scope.comment = ''
      })
    }
  }
];
