angular.module('NoteWrangler').controller('NotesShowController', function(Note, $scope, $routeParams) {
  $scope.note = Note.get({id: $routeParams.id});
});