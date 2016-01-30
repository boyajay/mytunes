import * as Backbone from 'backbone';
import _ from 'underscore';

var DeQueueButtonView = Backbone.View.extend({
  initialize() {
    this.render();
  },
  
  tagName: 'span',

  template: _.template(' X '),

  events: {
    'click': function() {
      this.model.deQueue();
    }
  },

  render() {
    return this.$el.html(this.template());
  }

});

module.exports = DeQueueButtonView;