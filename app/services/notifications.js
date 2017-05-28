import Ember from 'ember';

export default Ember.Service.extend({
  liveBar: Ember.inject.service(),

  register() {
    this.get('liveBar').registerApp({
      id:         "notifications",
      name:       "notifications",
      component:  "live-bar/notifications-app",
      args: {
        hello:              "say hello"
      }
    });
  }

});
