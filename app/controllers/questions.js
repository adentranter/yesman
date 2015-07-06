import Ember from 'ember';

export default Ember.Controller.extend({
  totalPoints:0,

  yesPercentage:function(){
    var totalPossiblePoints  = this.get('totalPossiblePoints');
    return Math.round(this.get('totalPoints')/totalPossiblePoints*100)+"%";
  }.property('totalPoints'),

  totalPossiblePoints:function() {
    var total = 0;

    this.get('model').forEach(function(item){
      total +=item.get('yes'); 
    });

    return total;
  }.property('model.@each'),

  actions:{
    getNextQuestion:function(lastId){
      var nextId = ++lastId;
      var nextModel = this.get('model').filter(function(item) {
          return item.get('id') == nextId;
      });

      //if all is well then transition
      if (nextModel.length > 0) {
        this.transitionTo('question',nextModel.get('firstObject'));
      }else {
        this.transitionTo('questions.finished');
      }
    },

    reset:function() {
      this.set('totalPoints',0);
      this.transitionTo('application');
    }
  }
});
