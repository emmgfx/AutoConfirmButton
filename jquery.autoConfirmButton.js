/*
    
The MIT License (MIT)

Copyright (c) 2015 Josep Viciana

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

jquery.AutoConfirmButton.js v1.0.0
Author: Josep Viciana
Twitter: @emmgfx
Blog: http://www.emm-gfx.net

*/

 (function($){
    $.fn.AutoConfirmButton = function(options) {

        var settings = $.extend({
            textConfirm:        'Sure?',
            textConfirmed:      '<i class="fa fa-check"></i>',
            classConfirm:       'btn-danger',
            classStandby:       'btn-warning',
            disableOnConfirm:   true,
            cancelTime:         2000,
            onFirstClickBefore: function(element){},
            onFirstClickAfter:	function(element){},
            onConfirm:          function(element){},
            allowFirstClick:	true
        }, options );
        
		this.each(function() {
    		
    		var btn = $(this);
    		
    		btn.on("click", function(){
        		if(btn.data("clicked") == "true"){
            		
                    btn.blur()
                    .data("clicked","false")
                    .html(settings.textConfirmed)
    				.removeClass(settings.classConfirm)
    				.addClass(settings.classStandby);
    				
    				if(settings.disableOnConfirm){
        				btn.addClass("disabled");
    				}
				
            		settings.onConfirm(btn);

        		}else{
            		
            		settings.onFirstClickBefore(btn);
            		
            		if(settings.allowFirstClick){
            		
            			btn.data("clicked","true")
            			   .removeClass(settings.classStandby)
            			   .addClass(settings.classConfirm)
            			   .data("text",btn.text())
            			   .text(settings.textConfirm);
            				
            			var retorno = setTimeout(function(){
            				if(btn.data("clicked") == "true"){
            					btn.data("clicked","false");
            					btn.removeClass(settings.classConfirm)
            					   .addClass(settings.classStandby)
            					   .text(btn.data('text'));
            				}
            			}, settings.cancelTime);
            			
                        settings.onFirstClickAfter(btn);
                        
        			}
        		}
        		
        		return false;
    		});
    		
		});

    };
})(jQuery);