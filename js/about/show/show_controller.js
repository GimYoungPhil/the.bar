define([
  'bar',
  'about/show/show_view'
], function(BarManager, View) {

  BarManager.module('AboutApp.Show', function(Show, BarManager, Backbone, Marionette, $, _) {

    Show.Controller = {
      showAbout: function() {
        var view = new View.Message();
        BarManager.mainRegion.show(view);
      }
    };

  });

  return BarManager.AboutApp.Show.Controller;

});