define(['bar'], function(BarManager) {

  BarManager.module('BottlesApp.List', function(List, BarManager, Backbone, Marionette, $, _) {

    List.Controller = {

      listBottles: function() {

        require(['entities/bottle', 'bottles/list/list_view', 'common/views'], function() {

          var loadingView = new BarManager.Common.Views.Loading();
          BarManager.mainRegion.show(loadingView);

          var fetchingBottles = BarManager.request('bottle:entities');

          $.when(fetchingBottles).done(function(bottles) {

            var view = new List.Bottles({
              collection: bottles
            });

            view.on('childview:bottle:show', function(childView, model) {
              BarManager.trigger('bottle:show', model.get('_id'));
            });

            view.on('childview:bottle:delete', function(childView, model) {
              model.destory();
            });

            BarManager.mainRegion.show(view);

          });

        });

      }

    };

  });

});