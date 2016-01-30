import * as Backbone from 'backbone';
// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue() {
    this.trigger('enqueue', this);
  },

  deQueue() {
    this.trigger( 'dequeue', this );
  },

  songEnd() {
    this.model.trigger('ended', this);
  }

});

module.exports = SongModel;