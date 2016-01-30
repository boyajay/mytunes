
import Songs from './collections/Songs';
import AppModel from './models/AppModel';
import AppView from './views/AppView';
import songData from './data/data';
import $ from 'jquery';

$(function() {
  // set up model objects
  var library = new Songs(songData);
  var app = new AppModel({library: library});
  console.log( songData );
  // build a view for the top level of the whole app
  var appView = new AppView({model: app});

  // put the view onto the screen
  $('body').append(appView.render());
});