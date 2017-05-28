import Ember from 'ember';

export function initialize(appInstance) {
  // const liveBarService          = appInstance.lookup('service:live-bar');
  const chatService             = appInstance.lookup('service:chat');
  const notificationsService    = appInstance.lookup('service:notifications');
  Ember.run(this, function() {
    chatService.register();
    notificationsService.register();
  });
}

export default {
  name: 'live-bar',
  initialize
};
