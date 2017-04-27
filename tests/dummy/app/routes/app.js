import Ember from 'ember';
import AutoLanguageSwitcher from 'ember-multi-language/mixins/lang-switcher-mixin';

const { Route } = Ember;

export default Route.extend(AutoLanguageSwitcher);
