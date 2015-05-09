angular.module('NoteWrangler', [
  'ngRoute', 
  'ngResource',
  'ngGravatar'
]).config(function(GravatarProvider) {
  GravatarProvider.setSize(75);
});