define([
  'bar',
  'tpl!common/templates/loading.tpl',
  'spin'
], function(BarManager, loadingTpl) {

  BarManager.module('Common.Views', function(Views, BarManager, Backbone, Marionette, $, _) {
    
    Views.Loading = Marionette.ItemView.extend({

      template: loadingTpl,
      title: 'Loading Data',
      message: 'Please wait, data is loading.',

      serializeData: function() {
        return {
          title: Marionette.getOption(this, 'title'),
          message: Marionette.getOption(this, 'message')
        }
      },

      onShow: function() {
        this.$('.spin').spin('show');
      }

    });

  });

  return BarManager.Common.Views;

});