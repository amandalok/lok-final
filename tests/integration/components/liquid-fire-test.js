import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | liquid-fire', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{liquid-fire}}`);


    // Template block usage:
    await render(hbs`
      {{#liquid-fire}}
        liquid fire renders
      {{/liquid-fire}}
    `);

    assert.equal('liquid fire renders', 'liquid fire renders');
  });
});
