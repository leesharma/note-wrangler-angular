angular.module('NoteWrangler').controller('NotesCreateController', function(Note, $scope, $location) {
  $scope.note = new Note();
  $scope.isSubmitting = false;

  $scope.saveNote = function(note) {
    $scope.isSubmitting = true;
    note.$save()
      .then(function(){
        $location.path('/notes/' + note.id);
      }).finally(function(){
        $scope.isSubmitting = false;
      });
  };
});