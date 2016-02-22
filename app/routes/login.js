import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      session: this.store.createRecord('session'),
    });
  },

  actions: {
    submit() {
      this.get('controller.model.session').save();
    },
  },
});
