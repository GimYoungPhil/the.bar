define([
  'bar',
  'bottles/list/list_view',
  'common/views'
], function(BarManager, View, CommonViews) {

  BarManager.module('BottlesApp.List', function(List, BarManager, Backbone, Marionette, $, _) {

    List.Controller = {

      listBottles: function() {

        require(['entities/bottle'], function() {

          var loadingView = new CommonViews.Loading();
          BarManager.mainRegion.show(loadingView);

          var fetchingBottles = BarManager.request('bottle:entities');
          $.when(fetchingBottles).done(function(bottles) {

            var layout = new View.Layout();
            var info = new View.Info();
            // bottle:list
            var listView = new View.Bottles({
              collection: bottles
            });

            layout.on('show', function() {
              layout.infoRegion.show(info);
              layout.listRegion.show(listView);
            })
            BarManager.mainRegion.show(layout);
          });

        });

      }

    };

  });

  return BarManager.BottlesApp.List.Controller;

});