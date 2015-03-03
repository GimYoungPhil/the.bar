'use strict';

require.config({
  paths: {
    jquery:      '../libs/jquery-2.1.3/jquery',
    underscore:  '../libs/underscore-1.7.0/underscore',
    backbone:    '../libs/backbone-1.1.2/backbone',
    marionette:  '../libs/backbone.marionette-2.3.2/backbone.marionette',
    syphon:      '../libs/backbone.syphon-0.4.1/backbone.syphon',
    bootstrap:   '../libs/bootstrap-3.3.2/js/bootstrap',
    spin:        '../libs/jquery.spin-1.1.6/javascripts/jquery.spin',
    tpl:         '../libs/underscore-1.7.0/underscore-tpl',
    text:        '../libs/underscore-1.7.0/text'
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
    marionette: ['backbone'],
    syphon:     ['backbone'],
    bootstrap:  ['jquery'],
    spin:       ['jquery']
  }
});

require([
  'bar', 'navbar/navbar_app'
], function(BarManager){
  BarManager.start();
});
