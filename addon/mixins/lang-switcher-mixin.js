import Ember from 'ember';

const { Mixin, get, set, inject: { service }, getOwner } = Ember;

export default Mixin.create({
  i18n: service(),

  actions: {
    didTransition() {
      const locales = get(this, 'i18n.locales');
      const locale = this.routeName;
      const config = getOwner(this).resolveRegistration('config:environment');
      const defaultLocale = config.i18n.defaultLocale || 'en';

      if (locales.indexOf(locale) > -1) {
        set(this, 'i18n.locale', locale);
      } else {
        set(this, 'i18n.locale', defaultLocale);
      }

      this._super(...arguments);
    },
  }
});
