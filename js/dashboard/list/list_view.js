define([
  'bar',
  'tpl!dashboard/list/templates/layout.tpl',
  'tpl!dashboard/list/templates/panel.tpl',
  'tpl!dashboard/list/templates/item.tpl',
  'tpl!dashboard/list/templates/list.tpl',
  'tpl!dashboard/list/templates/info.tpl',
  'bootstrap',
  'syphon'
], function(BarManager, layoutTpl, panelTpl, itemTpl, listTpl, infoTpl) {

  BarManager.module('DashboardApp.List.View', function(View, BarManager, Backbone, Marionette, $, _) {

    View.Layout = Marionette.LayoutView.extend({
      template: layoutTpl,
      regions: {
        panelRegion: '#panel-region',
        listRegion:  '#list-region',
        infoRegion: '#info-region'
      }
    });

    View.Panel = Marionette.ItemView.extend({
      template: panelTpl,
      events: {
        'click button.js-upload': 'best:upload'
      }
    });

    View.Item = Marionette.ItemView.extend({
      tagName: 'tr',
      template: itemTpl,
      triggers: {
        'click button.js-show': 'show:bottle'
      }
    });

    View.List = Marionette.CompositeView.extend({
      tagName: 'div',
      className: 'panel panel-primary',
      template: listTpl,
      childView: View.Item,
      childViewContainer: 'tbody',

      // onChildviewBottleDelete: function() {
      //   this.$el.fadeOut(1000, function() {
      //     $(this).fadeIn(1000);
      //   });
      // },

      // initialize: function() {
      //   this.listenTo(this.collection, 'reset', function() {
      //     this.attachHtml = function(collectionView, childView, index) {
      //       collectionView.$el.prepend(childView.el);
      //     }
      //   });
      // },

      // onRenderCollection: function() {
      //   this.attachHtml = function(collectionView, childView, index) {
      //     collectionView.$el.prepend(childView.el);
      //   }
      // }
    });

    View.Info = Marionette.ItemView.extend({
      tagName: 'div',
      className: 'panel panel-success fade',
      template: infoTpl,

      triggers: {
        'click a.js-edit': 'edit:bottle'
      },

      onShow: function() {
        console.log('onShow');
      },

      onRender: function() {
        console.log('onRender');
        this.$el.addClass('in');
      }
    })

  });

  return BarManager.DashboardApp.List.View;

});