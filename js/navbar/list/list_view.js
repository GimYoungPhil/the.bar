define([
  'bookstour.app',
  'tpl!sidebar/list/templates/list.tpl',
  'tpl!sidebar/list/templates/list_item.tpl'
], function(BooksTour, listTpl, listItemTpl) {

  BooksTour.module('SidebarApp.List.View', function(View, BooksTour, Backbone, Marionette, $, _) {

    View.Sidebar = Marionette.ItemView.extend({
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

    View.Sidebars = Marionette.CompositeView.extend({
      template: listTpl,
      className: '',
      childView: View.Sidebar,
      childViewContainer: 'ul'
    });

  });

  return BooksTour.SidebarApp.List.View;

});