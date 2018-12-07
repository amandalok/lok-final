import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


module('Integration | Component | updating-button', function(hooks) {
  setupRenderingTest(hooks);
    setupMirage(hooks);


    test('update button', async function(assert) {
    server.create('post', {
      name: 'View event',
      date: 'View event',
      location: 'View event',
      contact: 'View event',

    });

    await visit('/event/1/edit');
    fillIn('#name', 'Edit Name');
     await click('[data-test="update"]');
    assert.equal('name', 'name');


    });
});
