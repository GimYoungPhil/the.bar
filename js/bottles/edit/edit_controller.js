define(['bar'], function(BarManager) {
  
  BarManager.module('BottlesApp.Edit', function(Edit, BarManager, Backbone, Marionette, $, _) {

    Edit.Controller = {

      editBottle: function(id) {

        require(['entities/bottle', 'bottles/edit/edit_view', 'common/views'], function() {

          BarManager.dialogRegion.empty();

          var loadingView = new BarManager.Common.Views.Loading();
          BarManager.mainRegion.show(loadingView);

          var fetchingBottle = BarManager.request('bottle:entity', id);

          $.when(fetchingBottle).done(function(bottle) {

            var view;

            if (bottle !== undefined) {
              view = new Edit.Bottle({
                model: bottle
              });
            } else {
              view = new BarManager.BottlesApp.Show.MissingBottle();
            }

            view.on('form:submit', function(data) {
              if (bottle.save(data)) {
                BarManager.trigger('bottle:show', bottle.get('_id'));
              } else {
                view.triggerMethod('form:data:invalid', bottle.validationError);
              }
            });

            view.on('bottle:show', function(model) {
              BarManager.trigger('bottle:show', model.get('_id'));
            });

            BarManager.mainRegion.show(view);

          });

        });

      }

    }

  });

});