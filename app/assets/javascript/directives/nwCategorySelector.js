angular.module('NoteWrangler').directive('nwCategorySelector', function(Category, Note) {
  return {
    replace: true,
    restrict: 'E',
    require: '?ngModel',
    templateUrl: '/assets/templates/directives/nwCategorySelector.html',
    link: function(scope, element, attrs, ngModelCtrl) {
      var activeCategory = {};
      scope.categories = Category.query();
      scope.notes = Note.query();

      scope.isActive = function(category) { 
        return activeCategory && activeCategory.id === category.id;
      };

      scope.toggleCategory = function(category) {
        if (scope.isActive(category)) {
          activeCategory = {};
        } else {
          activeCategory = category;
        };

        ngModelCtrl.$setViewValue(activeCategory);
      };

      scope.noteCount = function(category) {
        var categoryNotes = [];
        for(var i=0, l = scope.notes.length; i < l; i++){
          if(scope.notes[i].categoryId === category.id) {
            categoryNotes.push(scope.notes[i]);
          }
        }
        return categoryNotes.length;
      };

      // Binds the activeCategory to the ng-model value
      // in order to allow filtering by category
      ngModelCtrl.$render = function() {
        activeCategory = ngModelCtrl.$viewValue;
      };
    } 
  };
});