import Ember from 'ember';
import config from 'drink-it-up/config/environment';

var ObjectPromiseProxy = Ember.ObjectProxy.extend(Ember.PromiseProxyMixin);

export default Ember.Component.extend({
  drink: null,
  glassInfo: Ember.computed('drink.servedIn.id', function() {
    var id = this.get('drink.servedIn.id');

    return ObjectPromiseProxy.create({
      promise: Ember.$.ajax(`${config.proxyHost}/glasses/${id}`)
    });
  }),

  glassPhotoUrl: Ember.computed('drink.servedIn.id', function() {
    var id = this.get('drink.servedIn.id');

    return `http://assets.absolutdrinks.com/glasses/${id}.jpg`;
  }),
});
