define(['bar'], function(BarManager) {

  BarManager.module('BottlesApp', function(BottlesApp, BarManager, Backbone, Marionette, $, _) {

    BottlesApp.Router = Marionette.AppRouter.extend({
      appRoutes: {
        'bottles':          'listBottles',
        'bottles/:id':      'showBottle',
        'bottles/:id/edit': 'editBottle'
      }
    });

    var API = {
      listBottles: function() {
        require(['bottles/list/list_controller'], function() {
          BottlesApp.List.Controller.listBottles();
        });
      },
      showBottle: function(id) {
        require(['bottles/show/show_controller'], function() {
          BottlesApp.Show.Controller.showBottle(id);
        });
      },
      editBottle: function(id) {
        require(['bottles/edit/edit_controller'], function() {
          BottlesApp.Edit.Controller.editBottle(id);
        });
      }
    };

    BarManager.on('bottles:list', function() {
      this.navigate('bottles');
      API.listBottles();
    });

    BarManager.on('bottle:show', function(id) {
      this.navigate('bottles/' + id);
      API.showBottle(id);
    });

    BarManager.on('bottle:edit', function(id) {
      this.navigate('bottles/' + id + '/edit');
      API.editBottle(id);
    });

    BarManager.addInitializer(function() {
      new BottlesApp.Router({
        controller: API
      });
    });

  });

});