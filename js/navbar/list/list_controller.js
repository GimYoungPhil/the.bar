define([
  'bar',
  'navbar/list/list_view'
], function(BarManager, View) {

  BarManager.module("NavbarApp.List", function(List, BarManager, Backbone, Marionette, $, _) {

    List.Controller = {

      listNavbar: function() {
        require(['entities/navbar'], function() {
          var links = BarManager.request('navbar:entities');
          var navbars = new View.Navbars({
            collection: links
          });

          navbars.on('childview:navigate', function(childView, model) {
            var trigger = model.get('navigationTrigger');
            BarManager.trigger(trigger);
          });

          BarManager.navbarRegion.show(navbars);
        });
      },

      setActiveNavbar: function(navbarUrl) {
        require(['entities/navbar'], function() {
          var links = BarManager.request('navbar:entities');
          links.each(function(navbar) {
            if (navbar.get('url') === navbarUrl) {
              navbar.set('selected', true);
            } else {
              navbar.set('selected', false);
            }
          });
          links.trigger('reset');
        });
      }

    };

  });

  return BarManager.NavbarApp.List.Controller;

});