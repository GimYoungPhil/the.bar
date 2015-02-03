define([
  'jquery',
  'underscore',
  'backbone',
  'views/navbar',
  'views/bottle',
  'views/info',
  'views/error'
], function($, _, Backbone, NavbarView, DashboardView, InfoView, ErrorView) {
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
      var dbView = new DashboardView();
      this.changeCurrentView(dbView);
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
