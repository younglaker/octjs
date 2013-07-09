/*
*	OctJs JavaScript Toolkit v1.0
*	https://github.com/younglaker/octjs
*	Description: Contains many frequently-used functions for web devolepment.
*	Copyright 2013, Laker Huang
*	Released under the MIT Licenses.
*	Date: 2013-05-27 to one day
*/

(function() {

	// Create a global window object "window.O"
	window.O = Oct = function(selector, root_id, tag) {
	    return new Octobj(selector, root_id, tag);
	};

	Oct.version = "1.0";

	//  selector: the elements you want.
	//  root_id: the root's id of the elements'root you want.
	//  tag: point out the specific tag of the selector. If none, it's document.
	var Octobj = function(selector, root_id, tag) {

		// args: the array stores the tags in "root_id".
		// type: id("#"), class(".") or tag("&").
		// eles: temporary!!! store the str after"# . &"
		var agrs, type, eles;
		var selector_exp = /^(?:#(\w-_)+|\.(\w-_)+|(\w)+)$/;

		// this.elements: store the elements you want and return in the end of function.
		this.elements = [];

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if (!selector) {
			return this;
		}

		if (root_id) {
			root_id = typeof root_id == "string" ? document.getElementById(root_id) : root_id;
		} else {
			root_id = document.body;
		}
		tag = tag || "*";
		if (tag !== "*") {
			tag = tag.slice(1);
		}

		// use lowercase to judge,and delete the space initio,then slpite by one or more space.
		selector = selector.replace(/^\s+/, "").split(/\s+/);

		// if dont point out the "root_id" and "tag", "args" is all the tags in document
		args = root_id.getElementsByTagName(tag);
		type = selector[0].charAt(0);
		eles = selector[0].slice(1);

		if (type === ".") {
			for (var i in args) {
				if(args[i].className) {
					var r = args[i].className.split(" ");
					for (var j in r) {
						if (r[j] === eles) {
							this.elements.push(args[i]);
						}
					}
				}
			}
		}

		if (type === "#") {
			for (var i in args) {
				if(args[i].id) {
					var r = args[i].id.split(" ");
					for (var j in r) {
						if (r[j] === eles) {
							this.elements.push(args[i]);
						}
					}
				}
			}
		}

		if (type === "&") {
			for (var i = 0; i < args.length; i++) {
				// "args[i].tagName" in browswer recognize uppercase, so base on coding habbit, use lowercase to juge.
				if (args[i].tagName.toLowerCase() === eles.toLowerCase()) {
					this.elements.push(args[i]);
				}
			}

		}

		// be careful!! here return "this",not "this.elememts", so do all the function.
		return this;
	};

	Octobj.prototype = {

		each: function(fun) {
			for (var c = 0; c < this.elements.length; c++) {

				// use "this.elements[]" to raplace "this" in the "fun",so it doesn't have to use "this.elements" to call the "fun".
				fun.call(this, this.elements[c]);
			}

			// here, "this" is the "Octobj" object,so do all the function.
			return this;
		},

		html: function(text) {
			this.each(function(eles) {
				// Warning: dont use "this.elements", use "eles"
				eles.innerHTML = text;
			});
	    return this;
		},

		setCss: function(property_list) {

			this.each(function(eles) {

				// "property_list" is a hash table.
				// "name" stores the index of "property_list".S
				for (var name in property_list) {
					eles.style[name] = property_list[name];
				}
			});

			return this;
		},

		getCss: function() {

			// property_name: the property name array, get from  "arguments".Because in "each" function, "arguments" is no longer means property, so use a variable to store it.
			// property_val: store the property value ans return
			var property_name = arguments;
			var property_val  = [];

			// IE
			if (document.documentElement.currentStyle) {
				this.each(function(eles) {
					for (var i in property_name){
						property_val.push(eles.currentStyle[property_name[i]]);	
					}
				});

			// not IE
			} else if (window.getComputedStyle) {
				this.each(function(eles) {
					for (var i in property_name){
						property_val.push(window.getComputedStyle(eles, null).getPropertyValue(property_name[i]));
					}
				});
			}

			// Turn array into string.
			return property_val.join(",");
		},

		height: function() {
			if (arguments.length === 0) {

				// Because "getCss" "setCss" is function of "Oct" object, so must use "this"(a Oct object) to call them, not "this.elements"
				return this.getCss("height");			
			} else if (arguments.length === 1) {
				this.setCss({height: arguments[1]});
				return this;
			}

		},

		width: function() {
			if (arguments.length === 0) {
				return this.getCss("width");
			} else if (arguments.length === 1) {
				this.setCss({width: arguments[1]});
				return this;
			}

		},

		setOpacity: function(level) {
			if (this.elements[0].style.opacity) {
				this.each(function(eles) {
					eles.style.opacity = level;
				});

			// IE9 and earlier
			} else {
				this.each(function(eles) {
					eles.style.filter = "alpha(opacity=" + level * 100 + ")";
				});
			}
		},

		a: function() {
			alert("message");
		},

		children: function(selector, level_start, level_stop) {
/*			var tem_elements = this.elements;
			var tem_tags = [], tags_array = [];
			this.elements = [];
			tags_array = tem_elements[0].children;
			console.log(tags_array);
			level_start = level_start || 0;
			level_stop = level_stop || level_start;
			// use lowercase to judge,and delete the space initio,then slpite by one or more space.
			selector = selector.replace(/^\s+/, "").split(/\s+/);
			type = selector[0].charAt(0);
			eles = selector[0].slice(1);

			if (type === ".") {
				for (var i = 0; i < tags_array.length; i++) {
					if (tags_array[i].className == eles) {
						this.elements.push(tags_array[i]);
					}
				}
			}

			if (type === "#") {
				this.elements.push(document.getElementById(eles));
			}

			if (type === "&") {
				for (var i = 0; i <= level_stop; i++) {
					tem_tags = tags_array;
				}

			}*/

/*			var tem_elements = this.elements[0].children;
			console.log(tem_elements);
			this.elements = [];
			for (var i = 0; i < tem_elements.length; i++) {
				// "nodeType"=1 means ELEMENT_NODE
				if (tem_elements[i].nodeType === 1) {
					this.elements.push(tem_elements[i]);
				}
			}
			console.log(this.elements);
*/
			
/*			var curr_ele = this.elements[0];
			selector = selector.slice(1);
			console.log(selector);
			this.elements = [];
			for (var i = 0; i <= level_stop; i++) {
console.log(curr_ele);
				while(!curr_ele.firstElementChild) {
					curr_ele = curr_ele.nextElementSibling;
					console.log("1");
				}

				curr_ele = curr_ele.firstElementChild;

				if (i >= level_start && curr_ele == selector) {
					this.elements.push(curr_ele);
					console.log("2");
				}

				while (curr_ele.nextElementSibling) {
					curr_ele = curr_ele.nextElementSibling;
					console.log(curr_ele);

					if (i >= level_start && curr_ele == selector) {
						console.log("4");
						this.elements.push(curr_ele);
					}
				}

				if (i === 0) {
					console.log("5");
					curr_ele = curr_ele.parentElement.firstElementChild;
				}

				while (i > 0 && curr_ele.parentElement.nextElementSibling) {
					console.log("6");
					curr_ele = curr_ele.parentElement.nextElementSibling
				}
			}
console.log(this.elements);*/
			return this;
		},

		addEvent: function(event_type, fn) {
			this.each(function(eles) {
				if (eles.addEventListener) {
					eles.addEventListener(event_type, fn, false);
				} else if (eles.attachEvent) {
					eles.attachEvent("on" + event_type, fn);
				}
			});
			return this;
		},

		hover: function(fn_1, fn_2) {
			return this.mouseover(fn_1).mouseout(fn_2);
		},

		click: function(fn) {
			this.addEvent("click", fn);
			return this;
		},

		mouseover: function(fn) {
			this.addEvent("mouseover", fn);
			return this;
		},

		mouseout: function(fn) {
			this.addEvent("mouseout", fn);
			return this;
		},

		mousemove: function(fn) {
			this.addEvent("mousemove", fn);
			return this;
		},

		mousedown: function(fn) {
			this.addEvent("mousedown", fn);
			return this;
		},

		mouseup: function(fn) {
			this.addEvent("onmouseup", fn);
			return this;
		}

	};

	Oct.ieVerion = function() {
	  var ua = navigator.userAgent;
		return /msie/.test(ua) && parseFloat((ua.match(/.*(?:rv|ie)[\/: ](.+?)([ \);]|$)/) || [])[1]) || false;
	}

	Oct.browswer = function() {
		var ua        = navigator.userAgent,
		result        = {name: "", version: ""},
		webkitVersion = /version\/(\d+(\.\d+)?)/i;

		if (/msie/i.test(ua)){
			result.name = "IE";
			// Or "/chrome\/((\d+.)+\d+)/i"
			result.version = ua.match(/msie (\d+(\.\d+)+)+/i)[1];
		
		} else if (/chrome/i.test(ua)){
			result.name = "Chrome";
			result.version = ua.match(/chrome\/(\d+(\.\d+)+)/i)[1];
		
		} else if (/firefox/i.test(ua)){
			result.name = "Firefox";
			result.version = ua.match(/firefox\/(\d+(\.\d+)+)/i)[1];
		
		} else if (/safari/i.test(ua) && !/chrome/i.test(ua)){
			result.name = "Safari";
			result.version = ua.match(webkitVersion)[1];
		
		} else if (/opera/i.test(ua)){
			result.name = "Opera";
			result.version = ua.match(webkitVersion)[1];
		
		} else {
			result.name = "Others";
			result.version = "NaN";
		}

		return result;
	}

	Oct.stopBubble = function(e) {

	  e = window.event || e;

		// IE
	  if(document.all) {
	  	e.cancelBubble = true;
	  }

		// not IE
	  else {
	  	e.stopPropagation();
	  }

	};

	Oct.alert = function(msg) {
		alert(msg);
	};

	Oct.randomNum = function(start, stop, type) {

		var random_num = makeRandom(stop);
		start = start || 0;
		stop  = stop  || 1;
		type  = type  || "float";

		while (random_num <= start){		//include the stop
			random_num = makeRandom(stop);
		}

		if (type === "int") {
			random_num = parseInt(random_num);
		}

		return random_num;
  };


	var makeRandom = function(max) {
		return Math.random() * max;
	}

	Oct.global = {};
	Oct.global.namespace = function(str) {
	  var arr = str.split("."), o = Oct.global;
	  console.log(arr);
	  for (var i = (arr[0] === "global") ? 1 : 0; i < arr.length; i++) {
	  	o[arr[i]] = o[arr[i]] || {};
	  	o = o[arr[i]];
	  }
	}

	// "trim()" is for lower than ie8
	Oct.trim = function(str) {
		return str.replace(/^\s+|\s+$/g, "");
	}

	String.prototype.trim = function(str) {
		return this.replace(/^\s+|\s+$/g, "");
	}

	Oct.isEmpty = function(str) {
		return /^\s*$/.test(str);
	}

	Oct.extend = function(super_class, sub_class) {
	  var Extend = function() {};
	  Extend.prototype = super_class.prototype;
	  sub_class.prototype.constructor = super_class;
	  sub_class.super_class = super_class.prototype;
	  if (super_class.prototype.constructor == Object.prototype.constructor) {
	  	super_class.prototype.constructor = super_class;
	  }
	}


})();