define(['bar'], function(BarManager) {

  BarManager.module('NavbarApp', function(Navbar, BarManager, Backbone, Marionette, $, _) {

    var API = {
      listNavbar: function() {
        require(['navbar/list/list_controller'], function(ListController) {
          ListController.listNavbar();
        });
      }
    };

    BarManager.commands.setHandler('set:active:navbar', function(name) {
      BarManager.NavbarApp.List.Controller.setActiveNavbar(name);
    });

    Navbar.on('start', function() {
      API.listNavbar();
    });

  });

  return BarManager.NavbarApp;

});