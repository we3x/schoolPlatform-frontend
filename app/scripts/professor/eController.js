'use strict'

module.exports = [
  '$window',
  '$scope',
  'text',
  '$state',
  'professorService',
  'API_URL',
  function professorController($window, $scope, text, $state, professorService, API_URL){
      $scope.content = text.data;
      $scope.editorConfig = {
            sanitize: false,
            toolbar: [
                    { name: 'basicStyling', items: ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', '-', 'leftAlign', 'centerAlign', 'rightAlign', 'blockJustify', '-'] },
                    { name: 'paragraph', items: ['orderedList', 'unorderedList', 'outdent', 'indent', '-'] },
                    { name: 'doers', items: ['removeFormatting', 'undo', 'redo', '-'] },
                    { name: 'colors', items: ['fontColor', 'backgroundColor', '-'] },
                    { name: 'links', items: ['image', 'hr', 'symbols', 'link', 'unlink', '-'] },
                    { name: 'tools', items: ['print', '-'] },
                    { name: 'styling', items: ['font', 'size', 'format'] },
                  ]
          };
          $scope.save = function(){
            professorService.saveText($scope.content);
            $window.location.replace('/#/professor/' + $scope.content.subject_id + '/');
          }
    }
]
