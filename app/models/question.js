import DS from 'ember-data';

var question =  DS.Model.extend({
  question:DS.attr(),
  yes:DS.attr(),
  no:DS.attr()  
});

question.reopenClass({
  FIXTURES: [
  { id: 1, question: 'Am I getting paid?', yes:5, no:0  },
  { id: 2, question: 'Will it take less than an hour including driving time', yes:3, no:0  },
  { id: 3, question: 'Can  email/give advice instead? ', yes:3, no:0  },
  { id: 4, question: 'Will this help grow my brand/business?', yes:5, no:0  },
  { id: 5, question: 'Is this a family extended related issue? ', yes:3.5, no:0  },
  { id: 6, question: 'Is this a family related issue? ', yes:8, no:0  },
  { id: 7, question: 'Feel good task?', yes:3, no:0  },
  ]
});



export default question;
