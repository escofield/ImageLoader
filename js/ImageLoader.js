// Generated by CoffeeScript 1.12.5
(function() {
  var slice = [].slice;

  require.config({
    paths: {
      "jquery": "//code.jquery.com/jquery-2.1.1.min",
      "bootstrap": "//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min"
    }
  });

  require('jquery', 'bootstrap', function($) {
    var MyPlugin;
    MyPlugin = (function() {
      MyPlugin.prototype.defaults = {
        paramA: 'buf',
        paramB: 'bar'
      };

      function MyPlugin(el, options) {
        this.options = $.extend({}, this.defaults, options);
        this.$el = $(el);
      }

      MyPlugin.prototype.myMethod = function(echo) {
        return this.$el.html(this.options.paramA + ': ' + echo);
      };

      return MyPlugin;

    })();
    return $.fn.extend({
      myPlugin: function() {
        var args, option;
        option = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        return this.each(function() {
          var $this, data;
          $this = $(this);
          data = $this.data('myPlugin');
          if (!data) {
            $this.data('myPlugin', (data = new MyPlugin(this, option)));
          }
          if (typeof option === 'string') {
            return data[option].apply(data, args);
          }
        });
      }
    });
  });

}).call(this);
