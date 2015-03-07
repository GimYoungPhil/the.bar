define([
  'bar',
  'tpl!bottles/list/templates/layout.tpl',
  'tpl!bottles/list/templates/info.tpl',
  'tpl!bottles/list/templates/bottle.tpl',
  'tpl!bottles/list/templates/empty.tpl',
  'moment',
  'bootstrap',
  'syphon'
], function(BarManager, layoutTpl, infoTpl, bottlTpl, emptyTpl, moment) {

  BarManager.module('BottlesApp.List.View', function(View, BarManager, Backbone, Marionette, $, _) {

    View.Layout = Marionette.LayoutView.extend({
      tagName: 'div',
      className: 'row',
      template: layoutTpl,
      regions: {
        infoRegion:  '#info-region',
        listRegion:  '#list-region'
      }
    });

    View.Info = Marionette.ItemView.extend({
      template: infoTpl
    });

    View.Bottle = Marionette.ItemView.extend({
      tagName: 'div',
      className: 'panel panel-default',
      template: bottlTpl,
      triggers: {
        'click button.js-show': 'show:bottle'
      },
      templateHelpers: function () {
        return {
          displayState: function(state) {
            if (state == 'close') return '밀봉';
            else if (state == 'open') return '개봉';
            else if (state == 'empty') return '빈병';
            else return '모름';
          },
          displayDate: function(date) {
            if (date) {
              return moment(date).format('L');
            } else {
              return '??';
            }
          },
          displayMoment: function(date) {
            if (date) {
              return moment(date).fromNow();
            } else {
              return '??';
            }
          }
        }
      }
    });

    View.Empty = Marionette.ItemView.extend({
      tagName: 'div',
      template: emptyTpl,
    });

    View.Bottles = Marionette.CollectionView.extend({
      tagName: 'div',
      childView: View.Bottle,
      emptyView: View.Empty
    });
  });

  return BarManager.BottlesApp.List.View;

});