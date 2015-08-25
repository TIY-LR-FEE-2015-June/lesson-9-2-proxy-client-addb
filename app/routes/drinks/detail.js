import Ember from 'ember';
import config from 'drink-it-up/config/environment';

export default Ember.Route.extend({
  model(params) {
    var drink = this.modelFor('drinks').result
      .findBy('id', params.drink_id);

    return Ember.RSVP.hash({
      drink: drink,
      glass: Ember.$.ajax(`${config.proxyHost}/glasses/${drink.servedIn.id}`)
    });
  },
  setupController(controller, model) {
    controller.set('glass', model.glass);

    return this._super(controller, model.drink);
  }
});
