define(['bar'], function(BarManager) {

  BarManager.module('BottlesApp', function(BottlesApp, BarManager, Backbone, Marionette, $, _) {

    BottlesApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'bottles': 'listBottles'
      }
    });

    var API = {
      listBottles: function() {
        require(['bottles/list/list_controller'], function(ListController) {
          ListController.listBottles();
          BarManager.execute('set:active:navbar', 'bottles');
        });
      }
    };

    BarManager.on('bottles:list', function() {
      this.navigate('bottles');
      API.listBottles();
    });

    BarManager.addInitializer(function() {
      new BottlesApp.Router({
        controller: API
      });
    });

  });

});