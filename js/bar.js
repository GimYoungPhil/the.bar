define(['marionette'], function(Marionette){
  
  var BarManager = new Marionette.Application();

  BarManager.addRegions({
    // headerRegion: '',
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

  BarManager.on('start', function(options){
    require(['bottles/bottle_app', 'dashboard/dashboard_app'], function() {
      if (Backbone.history) {
        Backbone.history.start();

        if (BarManager.getCurrentRoute() === '') {
          BarManager.trigger('dashboard:list');
        }
      }
    });
  });

  return BarManager;

});