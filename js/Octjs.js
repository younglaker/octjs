(function() {
	
	window.O = Oct = function(selector) {
	    return new Oct(selector);
	};

	var Oct = function(selector) {
		this.elements = document.getElementById(selector);
		return this;
	};

	Oct.prototype = {

		html: function(text) {
			this.elements.innerHTML = text;
			return this;
		},

		getCssValue: function(property) {
			var pro_val = 0;

			if(document.documentElement.currentStyle) {

				pro_val = this.elements.currentStyle[property];

			} else if(window.getComputedStyle) {

		  	pro_val = window.getComputedStyle(this.elements, null).getPropertyValue(property);

			}

			return pro_val;
		}

	};

}());