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
            // bottle:list
            var listView = new View.List({
              collection: bottles
            });

            listView.on('childview:show:bottle', function(childView, args) {
              // bottle:info
              var bottle = args.model;
              var infoView = new View.Info({
                model: bottle
              });

              infoView.on('edit:bottle', function() {
                var editView = new View.New({
                  model: bottle
                });
                BarManager.dialogRegion.show(editView);
              });
              layout.infoRegion.show(infoView);
            });

            layout.on('show', function() {
              layout.panelRegion.show(panel);
              layout.listRegion.show(listView);
            });

            // new:bottle
            panel.on('new:bottle', function() {
              var newBottle = new BarManager.Entities.Bottle();
              var newView = new View.New({
                model: newBottle
              });
              newView.on('post:bottle', function(data) {
                console.log(data);
                if (newBottle.save(data)) {
                  newView.closeModal();
                } else {
                  newView.triggerMethod('form:data:invalid', newBottle.validationError);
                }
              });
              newView.on('hidden:bs:modal', function() {
                BooksTour.trigger('stores:list');
              });
              BarManager.dialogRegion.show(newView);
            })
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