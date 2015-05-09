angular.module('NoteWrangler').controller('NotesCreateController', function(Note, Category, User, $scope, $location) {
  $scope.note = new Note();
  $scope.isSubmitting = false;
  $scope.categories = Category.query();
  $scope.users = User.query();

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