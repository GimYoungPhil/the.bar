define([
  'bar',
  'common/dateHelper'
], function(BarManager, dateHelper){

  BarManager.module('Entities', function(Entities, BarManager, Backbone, Marionette, $, _) {

    Entities.Bottle = Backbone.Model.extend({
      urlRoot: '/api/bottles',
      idAttribute: '_id',

      defaults: {
        title: null,
        imageLink: null,
        alcohol: '0',
        volume: '0',
        type: '기타',
        nationality: '한국',
        brewingDate: null,  // '2015-03-01',
        state: 'close', // close, open, empty
        memo: null
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
http://ko.wikipedia.org/wiki/%EC%88%A0
발효주: 탁주, 청주, 포도주, 맥주, 크바스
증류주: 소주, 코냑, 고량주, 위스키, 보드카
*/

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

    BarManager.reqres.setHandler('bottle:entity:new', function() {
      return new Entities.Bottle();
    })

    BarManager.reqres.setHandler('bottle:entity', function(id) {
      return API.getBottleEntity(id);
    });

    BarManager.reqres.setHandler('bottle:entities', function() {
      return API.getBottleEntities();
    });

  });

});