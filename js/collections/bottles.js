define([
  'underscore',
  'backbone',
  'models/bottle'
], function(_, Backbone, Bottle) {
  'use strict';

  var BottleCollection = Backbone.Collection.extend({
    model: Bottle,
    url: '/api/bottles'
  });

  return BottleCollection;
});