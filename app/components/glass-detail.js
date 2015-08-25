import Ember from 'ember';

export default Ember.Component.extend({
  glass: null,

  glassPhotoUrl: Ember.computed('drink.servedIn.id', function() {
    var id = this.get('glass.id');

    return `http://assets.absolutdrinks.com/glasses/${id}.jpg`;
  }),
});
