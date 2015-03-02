define([
  'bookstour.app'
], function(BooksTour) {

  BooksTour.module('SidebarApp', function(Sidebar, BooksTour, Backbone, Marionette, $, _) {

    var API = {
      listSidebar: function() {
        require(['sidebar/list/list_controller'], function(ListController) {
          ListController.listSidebar();
        });
      }
    };

    BooksTour.commands.setHandler('set:active:sidebar', function(name) {
      BooksTour.SidebarApp.List.Controller.setActiveSidebar(name);
    });

    Sidebar.on('start', function() {
      API.listSidebar();
    });

  });

  return BooksTour.SidebarApp;

});