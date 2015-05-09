angular.module('NoteWrangler').controller('UsersShowController', ['User', '$scope', '$routeParams', function(User, $scope, $routeParams) {
  $scope.user = User.get({id: $routeParams.id});
}]);