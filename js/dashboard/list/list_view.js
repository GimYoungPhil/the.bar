define([
  'bar',
  'tpl!dashboard/list/templates/layout.tpl',
  'tpl!dashboard/list/templates/panel.tpl',
  'tpl!dashboard/list/templates/item.tpl',
  'tpl!dashboard/list/templates/list.tpl',
  'tpl!dashboard/list/templates/info.tpl',
  'tpl!dashboard/list/templates/modal.tpl',
  'tpl!dashboard/list/templates/new.tpl',
  'bootstrap',
  'syphon'
], function(BarManager, layoutTpl, panelTpl, itemTpl, listTpl, infoTpl, modalTpl, newTpl) {

  BarManager.module('DashboardApp.List.View', function(View, BarManager, Backbone, Marionette, $, _) {

    View.Layout = Marionette.LayoutView.extend({
      template: layoutTpl,
      regions: {
        panelRegion: '#panel-region',
        listRegion:  '#list-region',
        infoRegion:  '#info-region'
      }
    });

    View.Panel = Marionette.ItemView.extend({
      template: panelTpl,
      triggers: {
        'click button.js-new': 'new:bottle'
      }
    });

    View.Item = Marionette.ItemView.extend({
      tagName: 'tr',
      template: itemTpl,
      triggers: {
        'click button.js-show': 'show:bottle'
      }
    });

    View.List = Marionette.CompositeView.extend({
      tagName: 'div',
      className: 'panel panel-primary',
      template: listTpl,
      childView: View.Item,
      childViewContainer: 'tbody',

      // onChildviewBottleDelete: function() {
      //   this.$el.fadeOut(1000, function() {
      //     $(this).fadeIn(1000);
      //   });
      // },

      // initialize: function() {
      //   this.listenTo(this.collection, 'reset', function() {
      //     this.attachHtml = function(collectionView, childView, index) {
      //       collectionView.$el.prepend(childView.el);
      //     }
      //   });
      // },

      // onRenderCollection: function() {
      //   this.attachHtml = function(collectionView, childView, index) {
      //     collectionView.$el.prepend(childView.el);
      //   }
      // }
    });

    View.Info = Marionette.ItemView.extend({
      tagName: 'div',
      className: 'panel panel-success',
      template: infoTpl,

      triggers: {
        'click a.js-edit': 'edit:bottle'
      },

      onShow: function() {
        this.$el.fadeIn(500);
      },

      templateHelpers: function () {
        return {
          displayState: function(state) {
            if (state == 'close') return '밀봉';
            else if (state == 'open') return '개봉';
            else if (state == 'empty') return '빈병';
            else return '모름';
          },
          displayDate: function(time) {
            var date = new Date(time);
            return date.toLocaleString();
          }
        }
      }
    });

    View.Modal = Marionette.ItemView.extend({
      tagName: 'div',
      className: 'modal fade',
      events: {
        'change input[name="imageLink"]': 'loadImage',
        'click button.js-post': 'postClicked'
      },

      ui: {
        imageLink: 'input[name="imageLink"]',
        bottleImg: 'img.js-image'
      },

      loadImage: function(e) {
        e.preventDefault();
        var link = this.ui.imageLink.val();
        this.ui.bottleImg.attr('src', link);
      },

      onShow: function() {
        // var link = this.ui.imageLink.val();
        // this.ui.bottleImg.attr('src', link);
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

      postClicked: function(e) {
        e.preventDefault();
        var data = Backbone.Syphon.serialize(this);
        this.trigger('post:bottle', data);
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
          $formGroup.append($errorEl).parent().addClass('has-error');
        }

        clearFormErrors();
        _.each(errors, markErrors);
      }
    });

    View.New = BarManager.DashboardApp.List.View.Modal.extend({
      template: newTpl
    });

  });

  return BarManager.DashboardApp.List.View;

});