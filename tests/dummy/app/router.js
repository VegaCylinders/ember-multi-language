import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('app', { path: '/' }, function() {
    this.route('beers');
  });

  this.alias('pl', '/pl', 'app');
  this.alias('en', '/en', 'app');
  this.alias('de', '/de', 'app');
});

export default Router;
