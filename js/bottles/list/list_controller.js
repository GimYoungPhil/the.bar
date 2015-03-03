define([
  'bar',
  'bottles/list/list_view',
  'common/views'
], function(BarManager, View, CommonViews) {

  BarManager.module('BottlesApp.List', function(List, BarManager, Backbone, Marionette, $, _) {

    List.Controller = {

      listBottles: function() {

        require(['entities/bottle', 'common/views'], function() {

 

        });

      }

    };

  });

  return BarManager.BottlesApp.List.Controller;

});