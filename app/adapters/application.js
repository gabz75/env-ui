import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'localhost:3000/api/v2',
  coalesceFindRequests: true,

  handleResponse: function(status, headers, payload) {
    if (status >= 400 && status < 500 && payload) {
      return {
        json: payload,
        errors: payload.errors,
      };
    }

    return this._super(status, headers, payload);
  },

  shouldReloadRecord: function() { return true; },

  shouldReloadAll: function() { return true; },

  shouldBackgroundReloadRecord: function() { return true; },

  shouldBackgroundReloadAll: function() { return true; },
});
