# A class-based template for jQuery plugins in Coffeescript
#
#     $('.target').myPlugin({ paramA: 'not-foo' });
#     $('.target').myPlugin('myMethod', 'Hello, world');
#
# Check out Alan Hogan's original jQuery plugin template:
# https://github.com/alanhogan/Coffeescript-jQuery-Plugin-Template
#
require.config  paths:
                    "jquery" : "//code.jquery.com/jquery-2.1.1.min"
                    "bootstrap" : "//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min"
requirejs 'jquery','bootstrap', ($) ->
        # Define the plugin class
        class MyPlugin
            defaults:
                paramA: 'buf'
                paramB: 'bar'
            constructor: (el, options) ->
                @options = $.extend({}, @defaults, options)
                @$el = $(el)
            # Additional plugin methods go here
            myMethod: (echo) ->
                @$el.html(@options.paramA + ': ' + echo)
        # Define the plugin
        $.fn.extend myPlugin: (option, args...) ->
            @each ->
                $this = $(this)
                data = $this.data('myPlugin')
                if !data
                    $this.data 'myPlugin', (data = new MyPlugin(this, option))
                if typeof option == 'string'
                    data[option].apply(data, args)