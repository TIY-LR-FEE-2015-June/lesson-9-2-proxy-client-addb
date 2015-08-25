import Ember from 'ember';
import config from 'drink-it-up/config/environment';

export default Ember.Route.extend({
  model() {
    return Ember.$.ajax(`${config.proxyHost}/drinks`);
  }
});
