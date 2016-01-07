'use strict'

module.exports = [
  '$scope',
  'texts',
  '$sce',
  function tController($scope, texts, $sce){
    $scope.texts = texts.data;
    $scope.getCurrent = function(text){
      $scope.current = text;
      $scope.ctext = $sce.trustAsHtml($scope.current.text)
    }
    $scope.current = $scope.getCurrent($scope.texts[0])
  }
];
