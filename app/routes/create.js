import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Create Event - Carpool',

  model() {
    return this.store.findAll('post');
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('name', '');
    controller.set('date', '');
    controller.set('location', '');
    controller.set('contact', '');
    controller.set('post', '');

  }
});
