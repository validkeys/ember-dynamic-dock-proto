import Ember from 'ember';

export default Ember.Service.extend({

  init() {
    this._super(...arguments);
    this.setProperties({
      apps: Ember.A([])
    });
  },

  apps: null,

  activeAppId: null,

  activeApp: Ember.computed('apps.@each.id','activeAppId', function() {
    return this.get('apps').find((app) => app.get('id') === this.get('activeAppId'));
  }),

  registerApp(config = {}) {
    const hasActive = this.get('activeApp');
    this.get('apps').pushObject(
      Ember.ObjectProxy.create({
        content:    config,
        badgeCount: 0
      })
    );

    if (!hasActive) {
      this.set('activeAppId', config.id);
    }
  },

  setActiveApp(app) {
    this.set('activeAppId', app.get('id'));
  },

  updateBadgeCount({ id, count }) {
    const app = this.get('apps').find((app) => app.get('id') === id);
    if (app) {
      app.set('badgeCount', count);
    }
  }

});
