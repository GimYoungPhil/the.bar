define([
  'bookstour.app',
  'sidebar/list/list_view'
], function(BooksTour, View) {

  BooksTour.module("SidebarApp.List", function(List, BooksTour, Backbone, Marionette, $, _) {

    List.Controller = {

      listSidebar: function() {
        require(['entities/sidebar'], function() {
          var links = BooksTour.request('sidebar:entities');
          var sidebars = new View.Sidebars({
            collection: links
          });

          sidebars.on('childview:navigate', function(childView, model) {
            var trigger = model.get('navigationTrigger');
            BooksTour.trigger(trigger);
          });

          BooksTour.sidebarRegion.show(sidebars);
        });
      },

      setActiveSidebar: function(sidebarUrl) {
        require(['entities/sidebar'], function() {
          var links = BooksTour.request('sidebar:entities');
          links.each(function(sidebar) {
            if (sidebar.get('url') === sidebarUrl) {
              sidebar.set('selected', true);
            } else {
              sidebar.set('selected', false);
            }
          });
          links.trigger('reset');
        });
      }

    };

  });

  return BooksTour.SidebarApp.List.Controller;

});