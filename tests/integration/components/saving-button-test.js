import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


module('Integration | Component | saving-button', function(hooks) {
  setupRenderingTest(hooks);

  test('saving button', async function(assert) {

    await visit('/event/new');
    await fillIn('#name', 'Name');
    await fillIn('#date', 'Date');
    await fillIn('#location', 'Location');
    await fillIn('#contact', 'Contact');


    await click('[data-test="save"]');

assert.equal(currentURL(), '/');
assert.dom('[data-test="event"]').exists({ count: 1 });
  });
});
