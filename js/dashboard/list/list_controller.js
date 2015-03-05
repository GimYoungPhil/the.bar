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

              // edit:bottle
              infoView.on('edit:bottle', function() {
                var editView = new View.New({
                  model: bottle
                });
                editView.on('post:bottle', function(data) {
                  var bottleSaved = bottle.save(data);
                  if (bottleSaved) {
                    editView.closeModal();
                    infoView.render();
                    childView.render();
                    childView.flash("success");
                  }
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
              var newBottle = BarManager.request('bottle:entity:new');
              var newView = new View.New({
                model: newBottle
              });
              newView.on('post:bottle', function(data) {
                // console.log(newBottle);
                // console.log(data);
                // newBottle.save(data, {
                //   success: function(model, response, options) {
                //     console.log(model);
                //     console.log(response);
                //     console.log(options);
                //   },
                //   error: function(model, response, options) {
                //   }
                // });
                var savingBottle = newBottle.save(data);
                if (savingBottle) {
                  $.when(savingBottle).done(function(model, response) {
                    console.log(model);
                    console.log(response);
                  }).fail(function() {

                  })
                }
                // if (bottleSaved) {
                //   newView.closeModal();
                //   bottles.add(newBottle);
                //   var newBottleView = listView.children.findByModel(newBottle);
                //   if (newBottleView) {
                //     newBottleView.flash("success");
                //     listView.trigger('childview:show:bottle', newBottleView);
                //   }
                // } else {
                //   newView.triggerMethod('form:data:invalid', newBottle.validationError);
                // }
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