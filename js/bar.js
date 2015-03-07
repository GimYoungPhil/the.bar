define(['marionette'], function(Marionette){
  
  var BarManager = new Marionette.Application();

  BarManager.addRegions({
    navbarRegion: '#navbar-region',
    mainRegion:   '#main-region',
    dialogRegion: '#dialog-region'
  });

  BarManager.navigate = function(route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
  };

  BarManager.getCurrentRoute = function() {
    return Backbone.history.fragment
  };

  BarManager.on('before:start', function() {
    require(['moment'], function(moment) {
      moment.locale('ko');
    });
  })

  BarManager.on('start', function(options){
    require(['bottles/bottle_app', 'dashboard/dashboard_app', 'about/about_app'], function() {
      if (Backbone.history) {
        Backbone.history.start();

        if (BarManager.getCurrentRoute() === '') {
          BarManager.trigger('bottle:list');
        }
      }
    });
  });

  return BarManager;

});