import Ember from 'ember';

export default Ember.Controller.extend({
  needs:['application'],
  actions: {
    add:function(selector) {
      var app = this.controllerFor('questions');

      if (selector) {
        //first all the old to the new
        var totalPoints = app.get('totalPoints');
        var newPoints = this.get('model.'+selector);
        app.set('totalPoints',totalPoints+newPoints);

        //move into the next question
        app.send('getNextQuestion',this.get('model.id'));
      }
    },
  }
});
