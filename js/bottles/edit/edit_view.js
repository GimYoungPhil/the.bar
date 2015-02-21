define(['bar', 'syphon'], function(BarManager) {

  BarManager.module('BottlesApp.Edit', function(Edit, BarManager, Backbone, Marionette, $, _) {
    
    Edit.Bottle = Marionette.ItemView.extend({
      template: '#bottle-form',

      events: {
        'click button.js-submit': 'submitClicked',
        'click button.js-show':   'showClicked'
      },

      submitClicked: function(e) {
        e.preventDefault();
        var data = Backbone.Syphon.serialize(this);
        this.trigger('form:submit', data);
      },

      showClicked: function(e) {
        e.preventDefault();
        this.trigger('bottle:show', this.model);
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
    });

  });

});