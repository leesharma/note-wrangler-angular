angular.module('NoteWrangler').filter('categoryFilter', function() {
  return function(collection, category) {
    // Return all if no category set
    if (!(category && category.id)) { return collection; };

    // Otherwise, collect and return matching items
    var newCollection = [];
    for(var i=0, l = collection.length; i < l; i++){
      if(collection[i].categoryId === category.id) {
        newCollection.push(collection[i]);
      }
    }
    return newCollection;
  };
});