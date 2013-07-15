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

					// className maybe have more than one class, so split it by spaces
					var r = args[i].className.split(/\s+/);
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
					var r = args[i].id.split(/\s+/);
					for (var j in r) {
						if (r[j] === eles) {
							this.elements.push(args[i]);
						}
					}
				}
			}
		}

		if (type === "&") {
			for (var i in args) {
				
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
			for (var c in this.elements) {

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

		add: function(str) {

	  	// list: store valliables splited by "," and one or more space.
	  	var list = str.split(/\,\s*/);
	  	for (var i in list ) {

	  		// type: id("#"), class(".") or tag("&").
	  		// name: the name of id or class or tag.
				type = list[i].charAt(0);
				name = list[i].slice(1);

				if (type === ".") {
					this.each(function(eles) {

						// If it doesnt have className before, then add "name" directly. Else id has className before, then add a spcace and "name" .
						eles.className = eles.className + (eles.className == "" ? "" : " ") + name;
					});
				}

				if (type === "#") {
					this.each(function(eles) {
						eles.id = eles.id + (eles.id == "" ? "" : " ") + name;
					});
				}
			}
	    return this;
	  },

	  remove: function(str) {
	  	var list = str.split(/\,\s*/);
	  	for (var i in list ) {
				type = list[i].charAt(0);
				name = list[i].slice(1);

				if (type === ".") {
					this.each(function(eles) {

						// There maybe a space before the name.
						eles.className = eles.className.replace(new RegExp("(^|\\s+)" + name), "");
					});
				}

				if (type === "#") {
					this.each(function(eles) {
						eles.id = eles.id.replace(new RegExp("(^|\\s+)" + name), "");
					});
				}

				if (type === "&") {
					this.each(function(eles) {
						for (var j in eles.childNodes) {

							// "nodeType === 1" means ELEMENT_NODE. Because "childNodes" contains "TEXT_NODE" which doesnt have "tagName" and report error
							if (eles.childNodes[j].nodeType === 1) {
								if (eles.childNodes[j].tagName.toLowerCase() === name.toLowerCase()) {
									eles.removeChild(eles.childNodes[j]);
								}
							}
						}
					});
				}

			}

	    return this;
	  },

	  has: function(str) {
	  	var list = str.split(/\,\s*/);
	  	var ele_arr = [];
	  	for (var i in list ) {
				type = list[i].charAt(0);
				name = list[i].slice(1);


				if (type === ".") {
					this.each(function(eles) {
						if (eles.className.match(name)) {
							ele_arr.push(eles);
						}
					});
				}

				if (type === "#") {
					this.each(function(eles) {
						if (eles.id.match(name)) {
							ele_arr.push(eles);
						}
					});
				}


				if (type === "&") {
					this.each(function(eles) {
						for (var j in eles.childNodes) {

							// "nodeType === 1" means ELEMENT_NODE. Because "childNodes" contains "TEXT_NODE" which doesnt have "tagName" and report error
							if (eles.childNodes[j].nodeType === 1) {
								if (eles.childNodes[j].tagName.toLowerCase() === name.toLowerCase()) {
									ele_arr.push(eles);
								}
							}
						}
					});
				}

				this.elements = ele_arr;
				ele_arr = [];
			}

			return this;
	  },

		setCss: function(property_list) {

			this.each(function(eles) {

				// "property_list" is a hash table.
				// "name" stores the index of "property_list".
				for (var name in property_list) {

					// Deal with the situation like "background-color", turn into "backgroundColor".
					var new_name = name;
					if (name.match("-")) {
						var p = name.match("-").index + 1;
						var c = name.charAt(p).toUpperCase();
						new_name = name.replace(/-\w/, c);
					}
					eles.style[new_name] = property_list[name];
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
					for (var name in property_name){

						// Deal with the situation like "background-color", turn into "backgroundColor".
						var new_name = property_name[name];
						if (name.match("-")) {
							var p = name.match("-").index + 1;
							var c = name.charAt(p).toUpperCase();
							new_name = name.replace(/-\w/, c);
						}						
						property_val.push(eles.currentStyle[new_name]);	
					}
				});

			// not IE
			} else if (window.getComputedStyle) {
				this.each(function(eles) {
					for (var name in property_name){
						var new_name = property_name[name];
						if (name.match("-")) {
							var p = name.match("-").index + 1;
							var c = name.charAt(p).toUpperCase();
							new_name = name.replace(/-\w/, c);
						}							
						property_val.push(window.getComputedStyle(eles, null).getPropertyValue(new_name));
					}
				});
			}

			// Turn array into string.
			return property_val;
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
		/*	
			var curr_ele = this.elements[0];
			selector = selector.slice(1);
			console.log(selector);
			this.elements = [];
			for (var i = 0; i <= level_stop; i++) {
				while(!curr_ele.firstElementChild) {
					curr_ele = curr_ele.nextElementSibling;
					console.log("1");
				}

				curr_ele = curr_ele.firstElementChild;

console.log(curr_ele.tagName);
				if (i >= level_start && curr_ele.tagName == selector) {
					this.elements.push(curr_ele);
					console.log("2");
				}

				while (curr_ele.nextElementSibling) {
					curr_ele = curr_ele.nextElementSibling;
					// console.log(curr_ele);

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
					curr_ele = curr_ele.parentElement.nextElementSibling;
				}
			}
console.log(this.elements);
			return this;*/
		},

		son: function(selector) {
			var curr;
			var sons = [];
			var type = selector[0].charAt(0);
			var name = selector.slice(1);

			if (type === ".") {
				this.each(function(eles) {
					curr = eles.firstElementChild;

					if (curr.className.match(name)) {
						sons.push(curr);
					}

					while (curr.nextElementSibling) {
						curr = curr.nextElementSibling;
						if (curr.className.match(name)) {
							sons.push(curr);
						}
					}	
				});
			}

			if (type === "#") {
				this.each(function(eles) {
					curr = eles.firstElementChild;

					if (curr.id.match(name)) {
						sons.push(curr);
					}

					while (curr.nextElementSibling) {
						curr = curr.nextElementSibling;
						if (curr.id.match(name)) {
							sons.push(curr);
						}
					}	
				});
			}

			if (type === "&") {
				this.each(function(eles) {
					curr = eles.firstElementChild;

					if (name === curr.tagName.toLowerCase()) {
						sons.push(curr);
					}

					while (curr.nextElementSibling) {
						curr = curr.nextElementSibling;
						if (name.toLowerCase() === curr.tagName.toLowerCase()) {
							sons.push(curr);
						}
					}	
				});
			}

			this.elements = sons;
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

/*	Oct.extend = function(super_class, sub_class) {
	  var Extend = function() {};
	  Extend.prototype = super_class.prototype;
	  sub_class.prototype.constructor = super_class;
	  sub_class.super_class = super_class.prototype;
	  if (super_class.prototype.constructor == Object.prototype.constructor) {
	  	super_class.prototype.constructor = super_class;
	  }
	}*/

	Oct.extendPro = function(super_class, sub_class) {
		sub_class.prototype = super_class.prototype;
	}

	Oct.extendFn = function(super_class, ds, name) {
		var args = [];
		for (var i = 2; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
		super_class.apply(ds, args);
	}

	Oct.isExist = function(arg) {
		return typeof arg !== undefined;
	}

	Oct.cookie = {
		set: function(options) {
			for (var i in arguments) {
				if (arguments[i].value !== undefined) {
					if (arguments[i] === undefined) {
						arguments[i] = {expires: "", path: "", domain: "", secure: ""};
					} else {
						arguments[i].expires = parseInt(arguments[i].expires);
						if (typeof arguments[i].expires === "number") {
							var days = arguments[i].expires,
									t = arguments[i].expires = new Date();
							// Caculate the day and set.
							t.setDate(t.getDate() + days);
						}
					}

					document.cookie = [
						arguments[i].item,
						"=",
						arguments[i].value,
						arguments[i].expires ? "; expires=" + arguments[i].expires.toUTCString() : "",
						arguments[i].path    ? "; path=" + arguments[i].path : "",
						arguments[i].domain  ? "; domain=" + arguments[i].domain : "",
						arguments[i].secure  ? "; secure" : ""
					].join("");
				}
			}
		},

		read: function() {
			if (document.cookie !== "") {
				var cookies_arr = document.cookie.split(/=|;\s?/);
				var result_arr = [];
				for (var i in arguments) {
					for (var j = 0; j < cookies_arr.length; j = j + 2) {
						if (cookies_arr[j] === arguments[i]) {
							result_arr.push(cookies_arr[j+1]);
						}
					}
				}
			}
			return result_arr;
		},

		remove: function() {
			if (document.cookie !== "") {
				var cookies_arr = document.cookie.split(/=|;\s?/);
				console.log(arguments.length);
				if (arguments.length === 0) {
					for (var j = 0; j < cookies_arr.length; j = j + 2) {
						console.log("message");
						Oct.cookie.set({item: cookies_arr[j], value: cookies_arr[j+1], expires: -1});
					}
				}

				for (var i in arguments) {
					for (var j = 0; j < cookies_arr.length; j = j + 2) {
						if (cookies_arr[j] === arguments[i]) {
							Oct.cookie.set({item: cookies_arr[j], value: cookies_arr[j+1], expires: -1});
						}
					}
				}
			}
		}

	}


})();