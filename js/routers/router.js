define([
  'jquery',
  'underscore',
  'backbone',
  'views/navbar',
  'views/bottles',
  'views/info',
  'views/error'
], function($, _, Backbone, NavbarView, BottlesListView, InfoView, ErrorView) {
  'use strict';

  var AppRouter = Backbone.Router.extend({
    mainDom: $('.main'),
    routes: {
      'bottles' : 'showBottles',
      'infomation': 'showInfo',
      ''          : 'redirect',
      '*error'    : 'showError'
    },

    initialize: function() {
      this.navbarView = new NavbarView();
    },

    redirect: function() {
      this.navigate('/infomation', {trigger: true});
    },

    showBottles: function() {
      var blView = new BottlesListView();
      this.changeCurrentView(blView);
    },

    showInfo: function() {
      var iView = new InfoView();
      this.changeCurrentView(iView);
    },

    showError: function() {
      var erView = new ErrorView();
      this.changeCurrentView(erView);
    },

    changeCurrentView: function(newView) {
      if (this.currentView) {
        this.currentView.remove();
      }
      this.currentView = newView;
      this.mainDom.html(this.currentView.render().el);
    }
  });

  return AppRouter;
});
