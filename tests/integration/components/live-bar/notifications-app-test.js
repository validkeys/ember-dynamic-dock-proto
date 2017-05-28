import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('live-bar/notifications-app', 'Integration | Component | live bar/notifications app', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{live-bar/notifications-app}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#live-bar/notifications-app}}
      template block text
    {{/live-bar/notifications-app}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
