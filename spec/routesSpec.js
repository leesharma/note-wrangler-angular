describe('NoteWrangler routes', function(){
  beforeEach(module('NoteWrangler'));

  describe('for /notes', inject(function($route){
    it('should use the noteIndexController', function(){
      expect($route.routes['/notes'].controller).toBe('noteIndexController');
    });
  }));
  
});