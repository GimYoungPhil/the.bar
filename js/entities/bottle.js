define(['bar'], function(BarManager){

  BarManager.module('Entities', function(Entities, BarManager, Backbone, Marionette, $, _) {

    Entities.Bottle = Backbone.Model.extend({
      urlRoot: '/api/bottles',
      idAttribute: '_id',

      defaults: {
        title: '',
        alcohol: ''
      },

      validate: function(attrs, options) {
        var errors = {};
        if (!attrs.title) {
          errors.title = '채워 주셔야 해요.';
        } else if (attrs.title.length < 2) {
          errors.title = '2자 이상 길게 채워 주셔야 해요.';
        }
        if (!attrs.alcohol) {
          errors.alcohol = '채워 주셔야 해요.';
        }
        if (!_.isEmpty(errors)) {
          return errors;
        }
      }
    });

/*
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
*/

    Entities.BottleCollection = Backbone.Collection.extend({
      url: '/api/bottles',
      model: Entities.Bottle,
      // comparator: 'stockDate'
    });

    var initializeBottles = function() {
      var bottles = new Entities.BottleCollection([
        { title: '참이슬',   alcohol: '19.5%' },
        { title: '스미노프', alcohol: '40%' },
        { title: '카스',    alcohol: '5%'}
      ]);
      bottles.forEach(function(bottle) {
        bottle.save();
      });
      return bottles;
    };

    var API = {
      getBottleEntity: function(bottleId) {

        var bottle = new Entities.Bottle({
          _id: bottleId
        });

        var defer = $.Deferred();
        bottle.fetch({
          success: function(data) {
            defer.resolve(data);
          }
        });

        return defer.promise();
      },
      getBottleEntities: function() {
        var bottles = new Entities.BottleCollection();

        var defer = $.Deferred();
        bottles.fetch({
          success: function(data) {
            defer.resolve(data);
          }
        });
        return defer.promise();
      }
    };

    BarManager.reqres.setHandler('bottle:entity', function(id) {
      return API.getBottleEntity(id);
    });

    BarManager.reqres.setHandler('bottle:entities', function() {
      return API.getBottleEntities();
    });

  });

});