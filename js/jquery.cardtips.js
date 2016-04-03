(function($, window, document) {
  var pluginName = 'cardtips',
      defaults = {
        ajax: null,
        align: 'bottom left',
        debug: true,
        delayHide: 300,
        delayShow: 300,
      };

  function Plugin(element, options) {
    // store args
    this.$target = $(element);
    this.options = $.extend({}, defaults, options);

    // instance variables
    this.$card;
    this.cardContent;
    this.hovered;
    this.position = {
      top:  0,
      left: 0
    };

    // start!
    this._init();
  }

  Plugin.prototype = {
    _init: function() {
      // disable the plugin on old browsers (including IE7 and lower)
			if (document.querySelector) {

        // save title
        if (this.$target.data(pluginName + '-title') === undefined) {
          var initialTitle = this.$target.attr('title');
          if (initialTitle === undefined) initialTitle = null;
          this.$target.data(pluginName + '-title', initialTitle);
        }

        this.$target
          // remove title to prevent dual tooltips
          .removeAttr('title')
          // add the plugin target class
          .addClass(pluginName + '-target');

      } // if
    },

    _show: function() {

    },

    _unhide: function() {
      this._createCard();
      this._positionCard();
    },

    _hide: function() {

    },

    _createCard: function() {

    },
    _positionCard: function() {

    },
  }

  $fn[pluginName] = function() {
    var args = arguments;

    // when this method is called directly
    if (this.length === 0) {

    // when this method is called on a jQuery object
    } else {

      // method calls are strings
      if (typeof args[0] === 'string') {

      // initializing (args[0] is undefined or we'll use as options object)
      } else {

        // dont add the tooltip if there's already one
        if (this.hasClass(pluginName + '-target')) {
          if (defaults.debug) console.log(pluginName + ': one or more cards have already been added to this element.');

        // otherwise start the plugin on this
        } else {
          this.each(function() {
            var instance = new Plugin(this, args[0]);
            if (instance.options.debug) console.log(pluginName + ': Created new card instance.');
          });
        }

      }
    }

    // allow chaining
    return this;
  } // main function

})(jQuery, window, document);
