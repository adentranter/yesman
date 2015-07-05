import Ember from 'ember';

export default Ember.Controller.extend({
  needs:['application'],
  actions: {
    add:function(points) {
      var app = this.controllerFor('application');

      if (points > 0 ) {
        var totalPoints = app.get('totalPoints');
        app.set('totalPoints',totalPoints+points);
      }

    },
  }
});
