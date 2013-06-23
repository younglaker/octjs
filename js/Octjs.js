/*
*	OctJs JavaScript Toolkit v1.0
*	https://github.com/younglaker/octjs
*	Description: Contains many usual functions for web devolepment.
*	Copyright 2013, Laker Huang
*	Released under the MIT Licenses.
*	Date: 2013-05-27 to one day
*/

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

		setCss: function(property_list) {

			for (var name in property_list) {
				this.elements.style[name] = property_list[name];
			}

			return this;
		},

		getCss: function(property) {
			var pro_val = [];

			if (document.documentElement.currentStyle) {

				for (var i in arguments){
					pro_val.push(this.elements.currentStyle[arguments[i]]);	
				}

			} else if (window.getComputedStyle) {

				for (var i in arguments){
					pro_val.push(window.getComputedStyle(this.elements, null).getPropertyValue(arguments[i]));
				}

			}

			return pro_val.join(",");
		},

		a: function() {
			console.log(arguments.length);
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

	};

	Oct.alert = function(msg) {
		alert(msg);
	};

}());