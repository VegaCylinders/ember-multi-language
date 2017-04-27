# Ember-multi-language

This addon mixes two great addons (`ember-i18n` and `ember-route-alias`) and adds extra sparkling to that juicy drink to make your app truly multi language effortlessly.

## Installation

1. Install addon:
```
ember install ember-multi-language
```

2. Update your `resolver.js`:
```
// app/resolver.js
import Resolver from 'ember-resolver';
import RouteAliasResolver from 'ember-route-alias/mixins/route-alias-resolver';

export default Resolver.extend(RouteAliasResolver);
```

3. Wrap all your routes in parent `app` route and alias all your languages like so:
```
// app/router.js
import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app', { path: '/' }, function() {
    // all your routes
  });

  this.alias('pl', '/pl', 'app');
  this.alias('en', '/en', 'app');
  this.alias('de', '/de', 'app');
});

export default Router;
```

4. Update your `app.js` route:
```
// app/routes/app.js
import Ember from 'ember';
import AutoLanguageSwitcher from 'ember-multi-language/mixins/lang-switcher-mixin';

const { Route } = Ember;

export default Route.extend(AutoLanguageSwitcher);
```

5. [Add translations](https://github.com/jamesarosen/ember-i18n/wiki/Doc:-Defining-Translations)

6. Set the default locale in `config/environment.js`:
```
ENV.i18n = {
  defaultLocale: 'zh'
};
```

## Usage

Now when you have everything set up, you can change your language using simple `link-to`:

```
{{#link-to 'en'}}
  English
{{/link-to}}

{{#link-to 'en.some-route'}}
  Some route in english
{{/link-to}}
```

All links that point to route named `app.*` will keep current language, so when you're on `http://your-page.com/de/news` and you click on link that should transition you to `app.news.details`, you'll end up on `http://your-page.com/de/news/2`. 
