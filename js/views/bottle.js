define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/bottle.html'
], function($, _, Backbone, template){
  'use strict';

  var ItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'col-xs-12 col-sm-3',
    template: _.template(template),
    events: {
    },

    initialize: function() {

    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));

      return this;
    }
  });

  return ItemView;
});