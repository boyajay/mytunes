import SongModel from '../models/SongModel';
import * as Backbone from 'backbone';

// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel

});

module.exports = Songs;