define([
  'jquery',
  'underscore',
  'backbone',
  'collections/bottles',
  'views/bottle',
  'text!views/bottles.html'
], function($, _, Backbone, BottleCollection, BottleItemView, template){
  'use strict';

  var ListView = Backbone.View.extend({
    tagName: 'div',
    className: 'row',
    // template: _.template(template),
    events: {
    },

    initialize: function() {

      this.collection = new BottleCollection();

      this.listenTo(this.collection, 'reset', this.render);
      this.collection.fetch({reset: true});
    },

    // render: function() {
    //   this.$el.html( this.template() );
    //   return this;
    // },

    render: function() {
      console.log(this.collection);
      this.collection.each(function(model) {
        this.renderOneBottle(model)
      }, this);

      return this;
    },

    renderOneBottle: function(model) {
      var biView = new BottleItemView({
        model: model
      });

      this.$el.append(biView.render().el);
    }
  });

  return ListView;
});