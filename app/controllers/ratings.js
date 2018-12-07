import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    star(post, newValue) {
      post.set('starRating', newValue);

    },
  }
});
