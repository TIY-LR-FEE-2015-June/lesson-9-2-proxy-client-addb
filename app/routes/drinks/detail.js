import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.modelFor('drinks').result
      .findBy('id', params.drink_id);
  },
});
