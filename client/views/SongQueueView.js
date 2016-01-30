import * as Backbone from 'backbone';
import SongQueueEntryView from './SongQueueEntryView';

// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on( 'change:songQueue', this.render, this );
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});

module.exports = SongQueueView;