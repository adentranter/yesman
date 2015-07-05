import Ember from 'ember';

export default Ember.Controller.extend({
  totalPoints:0,
  yesPercentage:function(){
    return Math.round(this.get('totalPoints')/31*100)+"%";
  }.property('totalPoints'),
});
