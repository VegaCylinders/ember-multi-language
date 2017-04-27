import Ember from 'ember';
import layout from '../templates/components/link-to';

const { computed, get, set, getOwner, inject: { service } } = Ember;

export default Ember.LinkComponent.extend({
  layout,

  i18n: service(),

  qualifiedRouteName: computed('targetRouteName', '_routing.currentState', function() {
    let params = get(this, 'params').slice();
    let lastParam = params[params.length - 1];
    const targetRouteName = get(this, 'targetRouteName');

    if (lastParam && lastParam.isQueryParams) {
      params.pop();
    }

    let onlyQueryParamsSupplied = params.length === 0;

    if (onlyQueryParamsSupplied) {
      return get(this, '_routing.currentRouteName');
    }

    const locale = get(this, 'i18n.locale');
    const targetRouteSegments = targetRouteName.split('.');

    if (targetRouteSegments.length === 1) {
      // Switch lang
      return get(this, 'targetRouteName');
    } else {
      // Keep current lang
      return [locale].concat(targetRouteSegments.slice(1)).join('.');
    }
  }),
});
