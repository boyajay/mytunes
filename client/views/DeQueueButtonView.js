import * as Backbone from 'backbone';
import _ from 'underscore';

var DeQueueButtonView = Backbone.View.extend({
  initialize() {
    this.render();
  },
  
  tagName: 'span',

  template: _.template(' x '),

  events: {
    'click': function() {
      this.model.deQueue();
    }
  },

  render() {
    console.log("render button");
    return this.$el.html(this.template());
  }

});

module.exports = DeQueueButtonView;