/*
*	OctJs JavaScript Toolkit v1.0
*	https://github.com/younglaker/octjs
*	Description: Contains many usual functions for web devolepment.
*	Copyright 2013, Laker Huang
*	Released under the MIT Licenses.
*	Date: 2013-05-27 to one day
*/

(function() {

	window.O = Oct = function(selector, root_id, tag) {
	    return new Octobj(selector, root_id, tag);
	};

	Oct.version = "1.0";

	//  selector: the elements you want.
	//  root_id: the root's id of the elements'root you want.
	//  tag: point out the specific tag of the selector. If none, it's document.
	var Octobj = function(selector, root_id, tag) {
		// args: the array stores the elements list splited by "selector".
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
		tag = tag.slice(1) || "*";

		// use lowercase to judge,and delete the space initio,then slpite by one or more space.
		selector = selector.replace(/^\s+/, "").split(/\s+/);
		// if dont point out the "root_id" and "tag", "args" is all the tags in document
		args = root_id.getElementsByTagName(tag);
		type = selector[0].charAt(0);
		eles = selector[0].slice(1);

		if (type === ".") {
			for (var i = 0; i < args.length; i++) {
				if (args[i].className == eles) {
					this.elements.push(args[i]);
				}
			}
		}

		if (type === "#") {
			this.elements.push(document.getElementById(eles));
		}

		if (type === "&") {
			for (var i = 0; i < args.length; i++) {
				// "args[i].tagName" in browswer recognize uppercase, so base on coding habbit, use lowercase to juge.
				if (args[i].tagName.toLowerCase() == eles.toLowerCase()) {
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
				eles.innerHTML = text;
			});
	    return this;
		},

		setCss: function(property_list) {

			this.each(function(e) {
				// "name" stores the index of "property_list".
				for (var name in property_list) {
					this.elements.style[name] = property_list[name];
				}
			});

			return this;
		},

		getCss: function(property) {
			var pro_val = [];

			// IE
			if (document.documentElement.currentStyle) {

				this.each(function(e) {
					for (var i in arguments){
						pro_val.push(this.elements.currentStyle[arguments[i]]);	
					}
				});


			// not IE
			} else if (window.getComputedStyle) {

				this.each(function(e) {
					for (var i in arguments){
						pro_val.push(window.getComputedStyle(this.elements, null).getPropertyValue(arguments[i]));
					}
				});


			}

			return pro_val.join(",");
		},

		a: function() {
			alert("message");
		},

		children: function(selector, level_start, level_stop) {
			var tem_elements = this.elements;
			this.elements = [];
			level_start = level_start || 0;
			level_stop = level_stop || level_start;
			// use lowercase to judge,and delete the space initio,then slpite by one or more space.
			selector = selector.replace(/^\s+/, "").split(/\s+/);
			// if dont point out the "root_id" and "tag", "args" is all the tags in document
			args = tem_elements[0].children;
			type = selector[0].charAt(0);
			eles = selector[0].slice(1);

			if (type === ".") {
				for (var i = 0; i < args.length; i++) {
					if (args[i].className == eles) {
						this.elements.push(args[i]);
					}
				}
			}

			if (type === "#") {
				this.elements.push(document.getElementById(eles));
			}
			console.log(args);
			if (type === "&") {
				for (var i = 0; i <= level_stop; i++) {
					console.log(i);
					var args_len = args.length;
					var tem_args = args;
					args = [];
					for (var j = 0; j < args_len; j++) {
						if (tem_args[i].tagName.toLowerCase() == eles.toLowerCase()) {
							args.push(tem_args[i]);
						}



					/*
						console.log(args);
						while(i >= level_start) {
							console.log("message");
							if (args[i].tagName.toLowerCase() == eles.toLowerCase()) {
								this.elements.push(args[i]);
								console.log(this.elements);
							}
							break;
						}*/
					}
					console.log(this.elements);
					// args = this.elements.children;
					console.log(args);
				}

			}
			// console.log(this.elements);
			return this;
		}
    
	};


	Oct.stopBubble = function() {

	  e = window.event || event;

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

		var rand_num = makeRandom(stop);
		type = type || "float";

		while(rand_num <= start){     //include the stop
			rand_num = makeRandom(stop);
		}
		if(type == "int") {
			rand_num = parseInt(rand_num);
		}

		return rand_num;
  };


	function makeRandom(max) {
		return Math.random() * max;
	}

}());