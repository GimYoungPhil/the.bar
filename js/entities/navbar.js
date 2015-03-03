define([
  'bar'
], function(BarManager) {

  BarManager.module('Entities', function(Entities, BarManager, Backbone, Marionette, $, _) {

    Entities.Navbar = Backbone.Model.extend();

    Entities.NavbarCollection = Backbone.Collection.extend({
      model: Entities.Navbar
    });

    var initializeNavbars = function() {
      Entities.navbars = new Entities.NavbarCollection([
        { name: 'Bottle',     url: 'bottles',    navigationTrigger: 'bottles:list',    glyphicon: 'queen'  },
        { name: 'Dashboard',  url: 'dashboard',  navigationTrigger: 'dashboard:list',  glyphicon: 'king'   },
        { name: 'About',      url: 'about',      navigationTrigger: 'about:show',      glyphicon: 'bishop' }
      ]);
    };

    var API = {
      getNavbars: function() {
        if (Entities.navbars === undefined) {
          initializeNavbars();
        }
        return Entities.navbars;
      }
    };

    BarManager.reqres.setHandler('navbar:entities', function() {
      return API.getNavbars();
    });

  });

  return ;
});