'use strict';

require.config({
  paths: {
    jquery:     '../libs/jquery-2.1.3/jquery',
    underscore: '../libs/underscore-1.7.0/underscore',
    backbone:   '../libs/backbone-1.1.2/backbone',
    paginator:  '../libs/backbone.paginator-2.0.0/backbone.paginator',
    bootstrap:  '../libs/bootstrap-3.3.2/js/bootstrap',
    text:       '../libs/require-2.1.15/text'
  },

  shim: {
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery','underscore'],
      exports: 'Backbone'
    },
    paginator: {
      deps: ['underscore','backbone'],
      exports: 'Paginator'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'bootstrap'
    }
  }

});

require([
  'backbone',
  'bootstrap',
  'routers/router'
], function(Backbone, Bootstrap, AppRouter){
  var router = new AppRouter();
  Backbone.history.start({pushState: false});
});
