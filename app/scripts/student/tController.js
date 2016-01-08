'use strict'

module.exports = [
  '$scope',
  'texts',
  '$sce',
  'API_URL',
  '$http',
  '$window',
  function tController($scope, texts, $sce, API_URL, $http, $window){
    $scope.texts = texts.data;
    $scope.getComment = function(){
      $http.get(API_URL + 'text/' + $scope.current.id + '/comments/').then(function(result){
      $scope.comments = result.data;
    })
    }
    $scope.getCurrent = function(text){
      $scope.current = text;
      $scope.ctext = $sce.trustAsHtml($scope.current.text)
      $scope.getComment()
      console.log($scope.current);
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
