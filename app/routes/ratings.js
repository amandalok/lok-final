import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Ratings',

  model() {

    return this.store.findAll('post');

  }
});
