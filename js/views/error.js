define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/error.html'
], function($, _, Backbone, template){
  'use strict';

  var ErrorView = Backbone.View.extend({
    tagName: 'div',
    className: 'row',
    template: _.template(template),
    events: {
    },

    initialize: function() {
    },

    render: function() {
      this.$el.html( this.template() );
      return this;
    }
  });

  return ErrorView;
});