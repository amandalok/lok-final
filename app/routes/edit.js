import Route from '@ember/routing/route';

export default Route.extend({
  titleToken: function(model) {
   return model.get('name');
 },
  model() {
    return this.store.findAll('post');
  },


  model(params) {
    return this.store.findRecord('post', params.id);
    return this.store.findAll('post');
  }
});
