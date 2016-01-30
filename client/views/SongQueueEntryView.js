import * as Backbone from 'backbone';
import _ from 'underscore';
import DeQueueButtonView from './DeQueueButtonView';

// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.play();
    }
  },

  render() {
     this.$el.html(this.template(this.model.attributes));
     this.$el.append(new DeQueueButtonView({model: this.model}).render());
     return this.$el;
  }

});

module.exports = SongQueueEntryView;