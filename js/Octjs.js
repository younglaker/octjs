(function() {

	window.O = Oct = function(selector) {
	    return new Octobj(selector);
	};

	Oct.version = "1.0";

	var Octobj = function(selector) {
		this.elements = document.getElementById(selector);
		return this;
	};

	Octobj.prototype = {

		html: function(text) {
			this.elements.innerHTML = text;
			return this;
		},

		getCssValue: function(property) {
			var pro_val = [];

			if(document.documentElement.currentStyle) {

				for (var i = 0; i < arguments.length; i++){
					pro_val.push(this.elements.currentStyle[arguments[i]]);	
				}

			} else if(window.getComputedStyle) {

				for (var i = 0; i < arguments.length; i++){
					pro_val.push(window.getComputedStyle(this.elements, null).getPropertyValue(arguments[i]));	
				}

			}

			return pro_val.join(",");
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