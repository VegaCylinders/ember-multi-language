import Ember from 'ember';
import LangSwitcherMixinMixin from 'ember-multi-language/mixins/lang-switcher-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | lang switcher mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let LangSwitcherMixinObject = Ember.Object.extend(LangSwitcherMixinMixin);
  let subject = LangSwitcherMixinObject.create();
  assert.ok(subject);
});
