angular.module('NoteWrangler').controller('NotesIndexController', ['Note', 'Category', '$scope', '$filter', function(Note, Category, $scope, $filter) {
  $scope.notes = Note.query();
  $scope.search = {};
}]);