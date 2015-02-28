define([
  'bar',
  'dashboard/list/list_view',
  'common/views'
], function(BarManager, View, CommonViews) {

  BarManager.module('DashboardApp.List', function(List, BarManager, Backbone, Marionette, $, _) {

    List.Controller = {

      listBottles: function() {

        require(['entities/bottle', 'common/views'], function() {

          var loadingView = new CommonViews.Loading();
          BarManager.mainRegion.show(loadingView);

          var fetchingBottles = BarManager.request('bottle:entities');
          var layout = new View.Layout();
          var panel = new View.Panel();

          $.when(fetchingBottles).done(function(bottles) {
            var listView = new View.List({
              collection: bottles
            });

            listView.on('childview:show:bottle', function(childView, args) {
              var infoView = new View.Info({
                model: args.model
              });
              layout.infoRegion.show(infoView);
            });

            layout.on('show', function() {
              layout.panelRegion.show(panel);
              layout.listRegion.show(listView);
            });
            BarManager.mainRegion.show(layout);

          });

          $.when(fetchingBottles).fail(function() {

          });

        });

      }

    };

  });

  return BarManager.DashboardApp.List.Controller;

});