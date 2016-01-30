import Songs from './Songs';

// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  // model: songModel -- inherited from Songs
  initialize: function() {
    // this.on('enqueue', this.set(this, this.get(this).concat(this), this )
  this.on('add', () => {if (this.length === 1) this.first().play(); });
  }



} );

module.exports = SongQueue;