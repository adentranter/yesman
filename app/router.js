import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route("intro");
  this.route("q1");
  this.route("q2");
  this.route("q3");
  this.route("q4");
  this.route("q5");
  this.route("q6");
  this.route("q7");
});
