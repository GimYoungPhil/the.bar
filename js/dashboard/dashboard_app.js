define(['bar'], function(BarManager) {

  BarManager.module('DashboardApp', function(DashboardApp, BarManager, Backbone, Marionette, $, _) {

    DashboardApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'dashboard': 'listBottles'
      }
    });

    var API = {
      listBottles: function() {
        require(['dashboard/list/list_controller'], function(ListController) {
          ListController.listBottles();
          BarManager.execute('set:active:navbar', 'dashboard');
        });
      }
    };

    BarManager.on('dashboard:list', function() {
      this.navigate('dashboard');
      API.listBottles();
    });

    BarManager.addInitializer(function() {
      new DashboardApp.Router({
        controller: API
      });
    });

  });

});