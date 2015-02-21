define(['marionette'], function(Marionette){
  
  var BarManager = new Marionette.Application();

  BarManager.addRegions({
    mainRegion: '#main-region'
  });

  BarManager.navigate = function(route, options) {
    options || (options = {});
    Backbone.history.navigate(route, options);
  };

  BarManager.getCurrentRoute = function() {
    return Backbone.history.fragment
  };

  BarManager.on('start', function(options){
    require(['bottles/bottle_app'], function() {
      if (Backbone.history) {
        Backbone.history.start();

        if (BarManager.getCurrentRoute() === '') {
          BarManager.trigger('bottles:list');
        }
      }
    });
  });

  return BarManager;

});