import * as Backbone from 'backbone';

// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize() {
  },

  setSong(song) {
    this.model = song;
    this.render();
  },

  render() {
    this.el.addEventListener( 'ended', this.model.songEnd.bind(this) );
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});

module.exports = PlayerView;