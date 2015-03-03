define([
  'bar',
  'tpl!navbar/list/templates/list.tpl',
  'tpl!navbar/list/templates/list_item.tpl'
], function(BarManager, listTpl, listItemTpl) {

  BarManager.module('NavbarApp.List.View', function(View, BarManager, Backbone, Marionette, $, _) {

    View.Navbar = Marionette.ItemView.extend({
      template: listItemTpl,
      tagName: 'li',

      events: {
        'click a': 'navigate'
      },

      navigate: function(e) {
        e.preventDefault();
        this.trigger('navigate', this.model);
      },

      onRender: function() {
        if (this.model.get('selected')) {
          this.$el.addClass('active');
        }
      }
    });

    View.Navbars = Marionette.CompositeView.extend({
      tagName: 'div',
      className: 'container',
      template: listTpl,
      childView: View.Navbar,
      childViewContainer: 'ul'
    });

  });

  return BarManager.NavbarApp.List.View;

});