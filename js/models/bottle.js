define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  'use strict';

  var BottleModel = Backbone.Model.extend({
    defaults: {
      title: '',
      type: '',
      volume: '',
      alcohol: '',
      state: '',
      nationality: '',
      imageLink: '',
      brewingDate: ''
    },
    idAttribute: '_id'
  });

  return BottleModel;
});