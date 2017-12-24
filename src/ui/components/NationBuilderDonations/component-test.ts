import hbs from '@glimmer/inline-precompile';
import { setupRenderingTest } from '@glimmer/test-helpers';

const { module, test } = QUnit;

module('Component: NationBuilderDonations', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<NationBuilderDonations />`);
    assert.equal(this.containerElement.textContent, 'Welcome to Glimmer!\n');
  });
});
