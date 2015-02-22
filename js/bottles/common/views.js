define(['bar', 'syphon'], function(BarManager) {

  BarManager.module('BottlesApp.Common.Views', function(Views, BarManager, Backbone, Marionette, $, _) {

    Views.Form = Marionette.ItemView.extend({
      tagName: 'div',
      className: 'modal fade',
      template: '#bottle-modal',

      events: {
        // 'click button.js-close':  'closeClicked',
        'click button.js-submit': 'submitClicked'
      },

      onShow: function() {
        this.$el.modal({
          backdrop: 'static',
          show: true
        });
      },

      closeModal: function() {
        var self = this;
        this.$el.on('hidden.bs.modal', function (e) {
          self.trigger('hidden:bs:modal');
        });
        this.$el.modal('hide');
      },

      // closeClicked: function(e) {
      //   e.preventDefault();
      //   this.trigger('bottle:show', this.model);
      // },

      submitClicked: function(e) {
        e.preventDefault();
        var data = Backbone.Syphon.serialize(this);
        this.trigger('form:submit', data);
      },

      onFormDataInvalid: function(errors) {
        var $view = this.$el;

        var clearFormErrors = function() {
          var $form = $view.find('form');
          $form.find('.help-block').each(function() {
            $(this).remove();
          });
          $form.find('.form-group.has-error').each(function() {
            $(this).removeClass('has-error');
          });
        }

        var markErrors = function(value, key) {
          var $formGroup = $view.find('#bottle-' + key).attr('aria-describedby', 'helpBlock-' + key).parent();
          var $errorEl = $('<span>', {id:'helpBlock-' + key, class: 'help-block', text: value});
          $formGroup.append($errorEl).addClass('has-error');
        }

        clearFormErrors();
        _.each(errors, markErrors);
      }

    })
  })

})