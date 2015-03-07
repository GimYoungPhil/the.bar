define([
  'bar',
  'navbar/list/list_controller'
], function(BarManager, ListController) {

  BarManager.module('NavbarApp', function(Navbar, BarManager, Backbone, Marionette, $, _) {

    var API = {
      listNavbar: function() {
        ListController.listNavbar();
      }
    };

    BarManager.commands.setHandler('set:active:navbar', function(name) {
      ListController.setActiveNavbar(name);
    });

    Navbar.on('start', function() {
      API.listNavbar();
    });

  });

  return BarManager.NavbarApp;

});