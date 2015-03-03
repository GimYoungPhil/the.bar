define(['bar'], function(BarManager) {

  BarManager.module('BottlesApp.Show', function(Show, BarManager, Backbone, Marionette, $, _) {

    Show.Controller = {

      showBottle: function(id) {

        require(['entities/bottle', 'bottles/show/show_view', 'common/views'], function() {

          BarManager.dialogRegion.empty();

          var loadingView = new BarManager.Common.Views.Loading();
          BarManager.mainRegion.show(loadingView);

          var fetchingBottle = BarManager.request('bottle:entity', id);

          $.when(fetchingBottle).done(function(bottle) {

            var view;

            if (bottle !== undefined) {
              view = new Show.Bottle({
                model: bottle
              });
            } else {
              view = new Show.MissingBottle();
            }

            view.on('bottle:edit', function(model) {
              BarManager.trigger('bottle:edit', model.get('_id'));
            });

            view.on('bottles:list', function() {
              BarManager.trigger('bottles:list');
            });

            BarManager.mainRegion.show(view);

          });

        });

      }

    }

  });

});