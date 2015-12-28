'use strict'

module.exports = [
  '$scope',
  'texts',
  function tController($scope, texts){
    $scope.texts = texts.data;
    $scope.current = $scope.texts[0];
    $scope.getCurrent = function(text){
      $scope.current = text;
    }
  }
];
