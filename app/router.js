import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('drinks', {path: '/'}, function() {
    this.route('detail', {path: '/:drink_id'});
    this.route('glass');
  });
});

export default Router;
