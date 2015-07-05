import Ember from 'ember';


export default Ember.Route.extend({
  model:function() {
    return this.store.find('question',1);
  },
  afterModel:function(model){
    this.transitionTo('question',model);
  }
});
