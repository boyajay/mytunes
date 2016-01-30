import * as Backbone from 'backbone';
import SongQueueEntryView from './SongQueueEntryView';

// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize() {
    this.render();
    this.collection.on( 'add', this.render, this );
    this.collection.on( 'remove', this.render, this );
  },

  render() {
    this.$el.children().detach();
    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});

module.exports = SongQueueView;