define([
  'bar',
  'tpl!about/show/templates/message.tpl'
], function(BarManager, messageTpl) {

  BarManager.module('AboutApp.Show.View', function(View, BarManager, Backbone, Marionette, $, _) {

    View.Message = Marionette.ItemView.extend({
      template: messageTpl
    });

  });

  return BarManager.AboutApp.Show.View;

});