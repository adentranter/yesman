import Ember from 'ember';
import QuestionMixin from '../../../mixins/question';
import { module, test } from 'qunit';

module('QuestionMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var QuestionObject = Ember.Object.extend(QuestionMixin);
  var subject = QuestionObject.create();
  assert.ok(subject);
});
