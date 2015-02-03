define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/info.html'
], function($, _, Backbone, template){
  'use strict';

  var InfoView = Backbone.View.extend({
    tagName: 'div',
    className: 'row',
    template: _.template(template),
    events: {
    },

    initialize: function() {

      this.example = {thumbnails:[
        {
          title: '메이크업',
          url: 'http://40.media.tumblr.com/56a1b2c008d7f3ac8e0a130b783c0160/tumblr_ni45l7obsq1rs4xi1o1_1280.jpg'
        },{
          title: '꽃',
          url: 'http://41.media.tumblr.com/b69eb462592de4565af2bd0a19e0f5f7/tumblr_nij6mo5HKc1s9x0m1o1_1280.jpg'
        },{
          title: '요리',
          url: 'http://40.media.tumblr.com/311208a3ef6110bd8e0369dc004f0592/tumblr_ni2o0cbkQv1r49faro1_1280.jpg'
        },{
          title: '고양이',
          url: 'http://36.media.tumblr.com/29477b4abed27f349f95e13f6de1c988/tumblr_niaeuv5BDx1qltjtho1_1280.jpg'
        },{
          title: '자동차',
          url: 'http://41.media.tumblr.com/a0ea10dded7e8619410bcffdf799947b/tumblr_nifiqeaDJF1tgc6x3o1_1280.jpg'
        },{
          title: '자전거',
          url: 'http://41.media.tumblr.com/687d4ce44c7ce253f3a08d6eecc321fb/tumblr_nif0d1spN61rpq0i8o1_1280.jpg'
        },{
          title: '야경',
          url: 'http://40.media.tumblr.com/4b118f52ed95f47681fc198f67984449/tumblr_nihgl54nGv1qb139no1_1280.jpg'
        },{
          title: '수영장',
          url: 'http://40.media.tumblr.com/a1c92ec25a13bb55153d568119dbd939/tumblr_nibvt9IUOV1qb139no1_500.jpg'
        },{
          title: '패턴',
          url: 'http://36.media.tumblr.com/tumblr_me21r8HV2l1qgqfzao1_500.jpg'
        },{
          title: '타투',
          url: 'http://40.media.tumblr.com/da57bb3cb0ba521259a7efa7fd2e0114/tumblr_ni6ko5xgtb1rvh5yko1_1280.jpg'
        },{
          title: '못된 손',
          url: 'http://40.media.tumblr.com/cbc788d668f43e07c5fd0639688de50e/tumblr_najiow9DYt1rpqy2eo1_500.jpg'
        },{
          title: '또 못된 손',
          url: 'http://41.media.tumblr.com/b1add116e41a8397cfb6cba448b4fd60/tumblr_ndkoala5Yp1qlf2x3o1_1280.jpg'
        },{
          title: '복면',
          url: 'http://36.media.tumblr.com/2a540652c9e765d44c9f8c19f2ae55c6/tumblr_nik12crgkv1rqmuhto1_1280.jpg'
        },{
          title: '흡연',
          url: 'http://41.media.tumblr.com/a20db3896ab64395830a4feee2b10f4a/tumblr_nbc4ajjX6O1r1s644o1_500.jpg'
        },{
          title: '음주',
          url: 'http://40.media.tumblr.com/243ba15b12373222500eabbe91597091/tumblr_nbclwovYKg1rcc0lwo1_1280.jpg'
        },{
          title: '야근',
          url: 'http://40.media.tumblr.com/4f0bb6e97a27b310360201073fea3de5/tumblr_nhvp8smg5w1t65o83o1_1280.jpg'
        }
      ]};
    },

    render: function() {
      this.$el.html( this.template(this.example) );
      return this;
    }
  });

  return InfoView;
});