'use strict'

module.exports = [
  '$window',
  '$scope',
  'subjects',
  'professorService',
  function professorController($window, $scope, subjects, professorService){
    $scope.username = $window.sessionStorage.username;
    $scope.subjects = subjects.data;
    $scope.togleSelect = function(subject){
      subject.selected = !subject.selected;
    }
    $scope.content = '<p><strong>Hello World!</strong></p>';
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
    $scope.showSelected = function(){
      for(var subject of $scope.subjects){
        if (subject.selected)
          professorService.putText({name: $scope.name, text: $scope.content, subject_id: subject.id})
      }
      $window.location.reload();
    }
  }
]
