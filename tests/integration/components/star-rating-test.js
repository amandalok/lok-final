import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | star-rating', function(hooks) {
  setupRenderingTest(hooks);

  test('one star rating works', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<StarRating @starRating={{1}} />
`);


    assert.dom('[data-test="oneStar"]').exists({ count: 1});
  });
});
