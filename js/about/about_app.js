define(['bar'], function(BarManager) {
  
  BarManager.module('AboutApp', function(AboutApp, BarManager, Backbone, Marionette, $, _) {

    AboutApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'about': 'showAbout'
      }
    });

    var API = {
      showAbout: function() {
        require(['about/show/show_controller'], function(ShowController) {
          ShowController.showAbout();
        });
      }
    };

    BarManager.on('about:show', function() {
      BarManager.navigate('about');
      API.showAbout();
    });

    BarManager.addInitializer(function() {
      new AboutApp.Router({
        controller: API
      });
    });

  });

  return BarManager.AboutApp;

});