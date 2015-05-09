angular.module('NoteWrangler').factory('Category', ['$resource', function ($resource) {
  return $resource('/categories/:id');
}]);