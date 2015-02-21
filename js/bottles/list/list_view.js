define(['bar'], function(BarManager) {

  BarManager.module('BottlesApp.List', function(List, BarManager, Backbone, Marionette, $, _) {

    List.Bottle = Marionette.ItemView.extend({
      tagName: 'tr',
      template: '#bottle-list-item',

      events: {
        'click': 'highlightName',
        'click a.js-show': 'showClicked',
        'click button.js-delete': 'deleteClicked'
      },

      highlightName: function(e) {
        e.preventDefault();
        this.$el.toggleClass('success');
      },

      showClicked: function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.trigger('bottle:show', this.model);
      },

      deleteClicked: function(e) {
        e.stopPropagation();
        this.trigger('bottle:delete', this.model);
      },

      remove: function() {
        var self = this;
        this.$el.fadeOut(function() {
          Marionette.ItemView.prototype.remove.call(self);
        });
      }
    });

    List.Bottles = Marionette.CompositeView.extend({
      tagName: 'table',
      className: 'table',
      template: '#bottle-list',
      childView: List.Bottle,
      childViewContainer: 'tbody',

      onChildviewBottleDelete: function() {
        this.$el.fadeOut(1000, function() {
          $(this).fadeIn(1000);
        });
      }
    });

  });

});