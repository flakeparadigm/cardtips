(function($) {
  var pluginName = 'cardtips',
      defaults = {
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

    // start!
    this._init();
  }

  Plugin.prototype = {
    _init: function() {

    },

    _show: function() {

    },

    _unhide: function() {

    },

    _hide: function() {

    },
  }

  $fn[pluginName] = function() {
    var args = arguments;

    // when this method is called directly
    if (this.length === 0) {

    // when this method is called on a jQuery object
    } else {

    }

    // allow chaining
    return this;
  }
})(jQuery);
