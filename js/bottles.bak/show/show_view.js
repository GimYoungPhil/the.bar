define(['bar'], function(BarManager) {

  BarManager.module('BottlesApp.Show', function(Show, BarManager, Backbone, Marionette, $, _) {

    Show.Bottle = Marionette.ItemView.extend({
      tagName: 'div',
      className: 'well',
      template: '#bottle-view',

      events: {
        'click a.js-edit': 'editClicked',
        'click a.js-list': 'listClicked'
      },

      editClicked: function(e) {
        e.preventDefault();
        this.trigger('bottle:edit', this.model);
      },

      listClicked: function(e) {
        e.preventDefault();
        this.trigger('bottles:list');
      }
    });

    Show.MissingBottle = Marionette.ItemView.extend({
      template: '#missing-bottle-view'
    });

  });

});