import Ember from 'ember';

export default Ember.Service.extend({
  liveBar: Ember.inject.service(),

  register() {
    console.log("Registering App!");
    this.get('liveBar').registerApp({
      id:         "chat",
      name:       "chat",
      component:  "live-bar/chat-app",
      args: {
        hello: "say hello"
      }
    });

    Ember.run.later(this, function(){
      this.get('liveBar').updateBadgeCount({
        id:     "chat",
        count:  3
      })
    }, 3000);

    Ember.run.later(this, function(){
      this.get('liveBar').updateBadgeCount({
        id:     "chat",
        count:  10
      })
    }, 10000);
  }

});
