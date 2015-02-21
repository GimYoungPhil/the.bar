define(['bar', 'syphon'], function(BarManager) {

  BarManager.module('BottlesApp.Edit', function(Edit, BarManager, Backbone, Marionette, $, _) {
    
    Edit.Bottle = Marionette.ItemView.extend({
      template: '#bottle-form',

      events: {
        'click button.js-submit': 'submitClicked',
        'click button.js-show':   'showClicked'
      },

      submitClicked: function(e) {
        e.preventDefault();
        var data = Backbone.Syphon.serialize(this);
        this.trigger('form:submit', data);
      },

      showClicked: function(e) {
        e.preventDefault();
        this.trigger('bottle:show', this.model);
      }
    });

  });

});