angular.module('NoteWrangler').controller('NotesIndexController', function(Note, Category, $scope, $filter) {
  $scope.notes = Note.query();
  $scope.search = {};
});