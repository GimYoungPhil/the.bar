define(['bar', 'bootstrap', 'syphon'], function(BarManager) {

  BarManager.module('BottlesApp.List', function(List, BarManager, Backbone, Marionette, $, _) {

    List.Layout = Marionette.LayoutView.extend({
      template: '#bottle-list-layout',

      regions: {
        panelRegion: '#panel-region',
        bottlesRegion: '#bottles-region'
      }
    });

    List.Panel = Marionette.ItemView.extend({
      template: '#bottle-list-panel'
    });

    List.Bottle = Marionette.ItemView.extend({
      tagName: 'tr',
      template: '#bottle-list-item',

      events: {
        'click':                  'highlightName',
        'click a.js-show':        'showClicked',
        'click a.js-edit':        'editClicked',
        'click button.js-delete': 'deleteClicked'
      },

      highlightName: function(e) {
        e.preventDefault();
        this.$el.toggleClass('success');
      },

      showClicked: function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.trigger('bottle:show', this.model);
      },

      editClicked: function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.trigger('bottle:edit', this.model);
      },

      deleteClicked: function(e) {
        e.stopPropagation();
        this.trigger('bottle:delete', this.model);
      },

      remove: function() {
        var self = this;
        this.$el.fadeOut(function() {
          Marionette.ItemView.prototype.remove.call(self);
        });
      },

      flash: function(cssClass) {
        var $view = this.$el;
        $view.hide().toggleClass(cssClass).fadeIn(800, function() {
          setTimeout(function() {
            $view.toggleClass(cssClass)
          }, 500);
        });
      }
    });

    List.Bottles = Marionette.CompositeView.extend({
      tagName: 'table',
      className: 'table',
      template: '#bottle-list',
      childView: List.Bottle,
      childViewContainer: 'tbody',

      onChildviewBottleDelete: function() {
        this.$el.fadeOut(1000, function() {
          $(this).fadeIn(1000);
        });
      }
    });

    List.Edit = Marionette.ItemView.extend({
      tagName: 'div',
      className: 'modal fade',
      template: '#bottle-modal',

      events: {
        'click button.js-close':  'closeClicked',
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
          self.trigger('hidden:modal');
        });
        this.$el.modal('hide');
      },

      closeClicked: function(e) {
        e.preventDefault();
        // this.trigger('bottle:show', this.model);
      },

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
    });

  });

});