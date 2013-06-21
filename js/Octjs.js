(function() {

	window.O = Oct = function(selector) {
	    return new O(selector);
	};

	Oct.version = "1.0";

	var O = function(selector) {
		this.elements = document.getElementById(selector);
		return this;
	};

	O.prototype = {

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


	Oct.stopBubble = function() {

	  e = window.event || event;
	  
	  if(document.all) {
	  	e.cancelBubble = true;
	  }
	  else {
	  	e.stopPropagation();
	  }

	}

	Oct.alert = function(msg) {
		alert(msg);
	}

}());