define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/navbar.html'
], function($, _, Backbone, navbarTemplate){
  'use strict';

  var NavbarView = Backbone.View.extend({
    el: '.navbar',
    template: _.template(navbarTemplate),
    events: {
      'click button.moveLogin': 'moveLogin',
      'click button.moveSignup': 'moveSignup'
    },

    initialize: function(options) {
      this.render(); 
    },
    render: function(){
      this.$el.append( this.template() );
      return this;
    },
    moveLogin: function() {
      window.location.href = '/account.html#login';
    },
    moveSignup: function() {
      window.location.href = '/account.html#signup';
    }
  });

  return NavbarView;
});