define([
  'bar',
  'tpl!bottles/list/templates/layout.tpl',
  'bootstrap',
  'syphon',
  'moment'
], function(BarManager, layoutTpl) {

  BarManager.module('BottlesApp.List.View', function(View, BarManager, Backbone, Marionette, $, _) {

    View.Layout = Marionette.LayoutView.extend({
      template: layoutTpl,
      regions: {
        panelRegion: '#panel-region',
        listRegion:  '#list-region',
        infoRegion:  '#info-region'
      }
    });

  });

  return BarManager.BottlesApp.List.View;

});