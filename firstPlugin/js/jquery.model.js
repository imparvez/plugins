(function($){
	$.fn.helloWorld = function(customText) {
		return this.each(function(){ //For Every selectors
			$(this).text(customText); //the text will be 'You are from model college ponchy'
		})
	}
	$.fn.helloSecondWorld = function() {
		return this.each(function(){ //For Every selectors
			$(this).css('fontWeight',400); //the text will have a color of red
		})
	}
	$.fn.helloThirdWorld = function(options) {
		var settings = $.extend({ //Merge content of two or more objects
			text : 'Hello World', //By default text
			color: null, //No Color
			fontStyle: null //No Font Style
		}, options);


		return this.each(function(options){
			$(this).text(settings.text);

			if(settings.color) {
				$(this).css('color', settings.color);
			}

			if(settings.fontStyle) {
				$(this).css('fontStyle', settings.fontStyle);
			}
		});
	}

}(jQuery));
