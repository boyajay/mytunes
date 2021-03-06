import Songs from './Songs';

// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  // model: songModel -- inherited from Songs
  initialize() {
    // this.on('enqueue', this.set(this, this.get(this).concat(this), this )
    this.on('add', () => {
      if (this.length === 1) this.first().play(); 
    });
    this.on('ended', 
      ()=>{ 
        this.remove(this.at(0)); 
        if( this.first() ){
          this.first().play();
        }} 
    );
    this.on('dequeue', (song)=>{
      // TODO? 
      // if song is only song when we remove it,
        // tell audio element to stop playing
      if (song === this.first()) {
        song.trigger('ended');
      } else {
        this.remove(song);
      }
    });
  }


});

module.exports = SongQueue;