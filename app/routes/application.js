import Route from '@ember/routing/route';

export default Route.extend({
  title: function(tokens) {
    tokens = Ember.makeArray(tokens);
    tokens.unshift('Carpool');
    return tokens.reverse().join(' - ');
   }

});
