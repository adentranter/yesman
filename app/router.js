import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource("questions",function(){
    this.resource("question",{path:':id'});
    this.route("finished");
  });
});
