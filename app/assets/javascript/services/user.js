angular.module('NoteWrangler').factory('User', ['$resource', function ($resource) {
  return $resource('/users/:id');
}]);