define(['bar'], function(BarManager) {

  BarManager.module('BottlesApp.New', function(New, BarManager, Backbone, Marionette, $, _) {

    require(['bottles/common/views'], function() {

      New.Bottle = BarManager.BottlesApp.Common.Views.Form.extend({
        title: 'New Bottle'
      });

    });

  });

});