define(['bar'], function(BarManager) {

  BarManager.module('BottlesApp.List', function(List, BarManager, Backbone, Marionette, $, _) {

    List.Controller = {

      listBottles: function() {

        require(['entities/bottle', 'bottles/list/list_view', 'common/views'], function() {

          var loadingView = new BarManager.Common.Views.Loading();
          BarManager.mainRegion.show(loadingView);

          var fetchingBottles = BarManager.request('bottle:entities');

          var bottlesListLayout = new List.Layout();
          var bottlesListPanel = new List.Panel();

          $.when(fetchingBottles).done(function(bottles) {

            var bottlesListView = new List.Bottles({
              collection: bottles
            });

            bottlesListLayout.on('show', function() {
              bottlesListLayout.panelRegion.show(bottlesListPanel);
              bottlesListLayout.bottlesRegion.show(bottlesListView);
            });

            bottlesListView.on('childview:bottle:show', function(childView, model) {
              BarManager.trigger('bottle:show', model.get('_id'));
            });

            bottlesListView.on('childview:bottle:edit', function(childView, model) {
              var modalView = new List.Edit({
                model: model
              });

              modalView.on('form:submit', function(data) {
                if (model.save(data)) {
                  modalView.closeModal();
                } else {
                  modalView.triggerMethod('form:data:invalid', model.validationError);
                }
              });

              modalView.on('hidden:modal', function() {
                childView.render();
                BarManager.dialogRegion.empty();
                childView.flash('info');
              });

              BarManager.dialogRegion.show(modalView);
            });

            bottlesListView.on('childview:bottle:delete', function(childView, model) {
              model.destory();
            });

            BarManager.mainRegion.show(bottlesListLayout);

          });

        });

      }

    };

  });

});