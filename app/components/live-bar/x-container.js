import Ember from 'ember';

export default Ember.Component.extend({
  liveBar: Ember.inject.service(),

  actions: {
    setActiveApp(app) {
      this.get('liveBar').setActiveApp(app);
    }
  }
});
