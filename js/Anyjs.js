function() {
  var b = window.$ = anyjs = function() {
    return new a(arguments)
  };
  anyjs.version = "2.8";
  anyjs.ie = !-[1, ];
  anyjs.temp = false;
  anyjs.globalvar = [];
  var a = function(o) {
    this.elements = [];
    this.anyOk = (document.getElementById && document.createElement && Array.prototype.push);
    for (var f = 0; f < o.length; f++) {
      var g = o[f], c = [], l = [], k, n = [], h = [];
      if (typeof g === "string") {
        if (g.indexOf("#") >= 0) {
          if (g.indexOf(" ") >= 0) {
            c = g.split(" ");
            k = document.getElementById(c[0].split("#")[1]);
            if (k) {
              l = k.getElementsByTagName(c[1]);
              for (var d = 0; d < l.length; d++) {
                this.elements.push(l[d])
              }
            }
          } else {
            k = document.getElementById(g.split("#")[1]);
            if (k) {
              this.elements.push(k)
            }
          }
        } else {
          if (g.indexOf(".") >= 0) {
            if (g.split(".")[0] == "") {
              alert("CLASS SELECTOR FAILED,NO TAG");
              return false
            }
            if (g.indexOf(" ") >= 0) {
              c = g.split(" ");
              n = document.getElementsByTagName(c[0].split(".")[0]);
              for (var d = 0; d < n.length; d++) {
                if (n[d].className == c[0].split(".")[1]) {
                  h = n[d].getElementsByTagName(c[1]);
                  for (var e = 0; e < h.length; e++) {
                    this.elements.push(h[e])
                  }
                }
              }
            } else {
              n = document.getElementsByTagName(g.split(".")[0]);
              for (var d = 0; d < n.length; d++) {
                if (n[d].className == g.split(".")[1]) {
                  this.elements.push(n[d])
                }
              }
            }
          } else {
            n = document.getElementsByTagName(g);
            for (var e = 0; e < n.length; e++) {
              this.elements.push(n[e])
            }
          }
        }
      } else {
        this.elements.push(g)
      }
    }
  };
  a.prototype = {hov: function(d, c) {
    return this.msover(d).msout(c)
  },click: function(c) {
    var d = this;
    this.each(function(e) {
      d.addEvent(e, "click", c)
    });
    return this
  },msover: function(c) {
    var d = this;
    this.each(function(e) {
      d.addEvent(e, "mouseover", c)
    });
    return this
  },msout: function(c) {
    var d = this;
    this.each(function(e) {
      d.addEvent(e, "mouseout", c)
    });
    return this
  },msmv: function(c) {
    var d = this;
    this.each(function(e) {
      d.addEvent(e, "mousemove", c)
    });
    return this
  },toggle: function(d, c) {
    var e = this, f = this.elements[0].id;
    if (!anyjs.globalvar[f + "togglefunc"] || anyjs.globalvar[f + "togglefunc"] == c) {
      anyjs.globalvar[f + "togglefunc"] = c;
      e.rmvEvent(this.elements[0], "click")
    } else {
      anyjs.globalvar[f + "togglefunc"] = c;
      e.rmvEvent(this.elements[0], "click")
    }
  },blur: function(c) {
    var d = this;
    this.each(function(e) {
      d.addEvent(e, "blur", c)
    });
    return this
  },focus: function(c) {
    var d = this;
    this.each(function(e) {
      d.addEvent(e, "focus", c)
    });
    return this
  },change: function(c) {
    var d = this;
    this.each(function(e) {
      d.addEvent(e, "change", c)
    });
    return this
  },submit: function(c) {
    var d = this;
    this.each(function(e) {
      d.addEvent(e, "submit", c)
    });
    return this
  },load: function(d) {
    var c = this.elements[0] || window;
    return this.addEvent(c, "load", d)
  },keypress: function(d) {
    var c = this.elements[0] || document;
    return this.addEvent(c, "keypress", d)
  },keyup: function(d) {
    var c = this.elements[0] || document;
    return this.addEvent(c, "keyup", d)
  },cs: function(d, c) {
    if (!c) {
      var c = this.elements[0];
      if (c.currentStyle) {
        return parseInt(c.currentStyle[d])
      } else {
        return parseInt(window.getComputedStyle(c, null)[d])
      }
    }
    this.each(function(e) {
      if (d == "opacity") {
        e.style.filter = "alpha(opacity=" + parseInt(c * 100) + ")";
        e.style.opacity = c
      } else {
        e.style[d] = c
      }
    });
    return this
  },show: function() {
    var c = this;
    this.each(function() {
      c.cs("display", "block")
    });
    return this
  },hide: function() {
    var c = this;
    this.each(function() {
      c.cs("display", "none")
    });
    return this
  },get: function(d) {
    var c = d || "value";
    if (d == "class") {
      return this.elements[0].className
    }
    return this.elements[0].getAttribute(c)
  },set: function(c, d) {
    this.each(function(e) {
      if (c == "html" || c == "h") {
        e.innerHTML = d
      } else {
        if (c == "class") {
          e.className = e.className + (e.className == "" ? "" : " ") + d
        } else {
          e.setAttribute(c, d)
        }
      }
    });
    return this
  },rmvcls: function(c) {
    this.each(function(d) {
      d.className = d.className.replace(c, "")
    });
    return this
  },h: function(d) {
    if (!d) {
      return this.elements[0].innerHTML
    }
    var c = this;
    this.each(function() {
      c.set("h", d)
    });
    return this
  },apd: function(c) {
    return this.elements[0].appendChild(c)
  },ist: function(c) {
    if (this.elements[0].firstChild) {
      return this.elements[0].insertBefore(c, this.elements[0].firstChild)
    } else {
      return this.elements[0].appendChild(c)
    }
  },rmv: function() {
    if (this.elements) {
      for (var c = 0; c < this.elements.length; c++) {
        this.elements[c].parentNode.removeChild(this.elements[c])
      }
    }
    return null
  },fout: function() {
    var c = this, d = 100;
    if (anyjs.temp) {
      clearInterval(anyjs.temp)
    }
    anyjs.temp = setInterval(function() {
      d -= 5;
      c.cs("opacity", (d / 100));
      if (d <= 0) {
        clearInterval(anyjs.temp);
        anyjs.temp = null;
        c.hide();
        c.cs("opacity", 100)
      }
    }, 10)
  },fin: function() {
    var d = 1, c = this;
    if (anyjs.temp) {
      clearInterval(anyjs.temp)
    }
    c.cs("opacity", (0.05));
    c.show();
    anyjs.temp = setInterval(function() {
      d += 5;
      c.cs("opacity", (d / 100));
      if (d >= 100) {
        clearInterval(anyjs.temp);
        anyjs.temp = null
      }
    }, 10)
  },sout: function(d, g) {
    d = d || 5;
    g = g || "height";
    var c = this, e = c.cs(g), f = this.elements[0].id;
    if (e == 0) {
      return false
    }
    if (!anyjs.globalvar[f + "slide"]) {
      anyjs.globalvar[f + "slide"] = e
    }
    if (anyjs.temp) {
      clearInterval(anyjs.temp)
    }
    anyjs.temp = setInterval(function() {
      e -= d;
      c.cs(g, e + "px");
      if (e <= 0) {
        clearInterval(anyjs.temp);
        anyjs.temp = null;
        c.hide()
      }
    }, 10)
  },sin: function(d, f) {
    var c = this, e = 0;
    id = this.elements[0].id;
    if (!anyjs.globalvar[id + "slide"]) {
      return false
    }
    d = d || 5;
    f = f || "height";
    if (anyjs.temp) {
      clearInterval(anyjs.temp)
    }
    c.cs(f, e + "px");
    c.show();
    anyjs.temp = setInterval(function() {
      e += d;
      c.cs(f, e + "px");
      if (e >= anyjs.globalvar[id + "slide"]) {
        clearInterval(anyjs.temp);
        anyjs.temp = null
      }
    }, 10)
  },each: function(d) {
    for (var c = 0; c < this.elements.length; c++) {
      d.call(this, this.elements[c])
    }
    return this
  },addEvent: function(d, e, c) {
    if (d.addEventListener) {
      d.addEventListener(e, c, false);
      return true
    } else {
      if (d.attachEvent) {
        d["e" + e + c] = c;
        d.attachEvent("on" + e, function() {
          d["e" + e + c](window.event)
        });
        return true
      }
    }
    return false
  },rmvEvent: function(d, c) {
    this.each(function(e) {
      if (e.removeEventListener) {
        e.removeEventListener(d, c, false)
      } else {
        e.detachEvent("on" + d, e["e" + d + c]);
        e["e" + d + c] = null
      }
    });
    return this
  },callThis: function(){
    this.each(function(e){
      console.log(e.nodeName);
    });
    return this;
  }
  };
  anyjs.x = function(d) {
    d.method = d.method.toUpperCase() || "GET";
    d.datatype = d.datatype || "HTML";
    d.msgid = document.getElementById(d.msgid) || null;
    var h = {xml: "application/xml, text/xml",html: "text/html",script: "text/javascript, application/javascript",json: "application/json, text/javascript",text: "text/plain",_default: "*/*"};
    if (!window.XMLHttpRequest) {
      XMLHttpRequest = function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
      }
    }
    var k = new XMLHttpRequest;
    if (k) {
      var g = "Please waiting...";
      var f = "Please waiting,sending...";
      var i = "Please waiting,receiving...";
      var c = "Connecting failed,try refresh page";
      k.open(d.method, d.url, true);
      k.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      k.setRequestHeader("Accept", d.datatype && h[d.datatype] ? h[d.datatype] + ", */*" : h._default);
      k.onreadystatechange = function() {
        if (k.readyState == 1) {
          d.msgid ? d.msgid.innerHTML = g : ""
        } else {
          if (k.readyState == 2) {
            d.msgid ? d.msgid.innerHTML = f : ""
          } else {
            if (k.readyState == 3) {
              d.msgid ? d.msgid.innerHTML = i : ""
            } else {
              if (k.readyState == 4) {
                if (k.status == 200) {
                  d.callbackfn(anyjs.dataform(k, d.datatype))
                } else {
                  d.msgid ? d.msgid.innerHTML = c : ""
                }
              }
            }
          }
        }
      };
      try {
        k.send(d.method === "POST" ? d.senddata : null)
      } catch (j) {
      }
    }
  };
  anyjs.dataform = function(g, e) {
    var d = g.getResponseHeader("content-type") || "", c = e === "xml" || !e && d.indexOf("xml") >= 0, f = c ? g.responseXML : g.responseText;
    if (typeof f === "string") {
      if (e === "json" || !e && d.indexOf("json") >= 0) {
        f = anyjs.trim(f);
        return window.JSON && window.JSON.parse ? window.JSON.parse(f) : (new Function("return " + f))()
      }
    }
    return f
  };
  anyjs.xget = function(d, c, g, f, e) {
    return anyjs.x({method: "GET",url: d,callbackfn: c,msgid: g,datatype: f,senddata: e})
  };
  anyjs.post = function(d, e, c, g, f) {
    return anyjs.x({method: "POST",url: d,senddata: e,callbackfn: c,msgid: g,datatype: f})
  };
  anyjs.gjson = function(d, c, e) {
    return anyjs.xget(d, c, e, "json")
  };
  anyjs.gxml = function(d, c, e) {
    return anyjs.xget(d, c, e, "xml")
  };
  anyjs.gjsonp = function(d, c) {
    var f = document.getElementsByTagName("head")[0];
    var e = anyjs.create("script");
    anyjs(e).set("type", "text/javascript").set("src", d);
    anyjs(f).apd(e);
    if (anyjs.ie) {
      e.onreadystatechange = function() {
        if (e.readyState == "loaded" || e.readyState == "complete") {
          (c)(JSONP);
          JSONP = null;
          anyjs(e).rmv()
        }
      }
    } else {
      e.onload = function() {
        (c)(JSONP);
        JSONP = null;
        anyjs(e).rmv()
      }
    }
    return false
  };
  anyjs.create = function(c) {
    var d = null;
    try {
      d = document.createElement("<" + c + ' name="_tag_name_demo">')
    } catch (f) {
      d = document.createElement(c);
      d.name = "_tag_name_demo"
    }
    return d
  };
  anyjs.trim = function(c) {
    return (c || "").replace(/(^\s+)|(\s+$)/g, "")
  }
})();
var $$ = function() {
  return (typeof arguments[0]) == "string" ? document.getElementById(arguments[0]) : "null"
};
var $t = function() {
  return (typeof arguments[0]) == "string" ? document.getElementsByTagName(arguments[0]) : "null"
};
function createCookie(c, d, e) {
  if (e) {
    var b = new Date();
    b.setTime(b.getTime() + (e * 24 * 60 * 60 * 1000));
    var a = "; expires=" + b.toGMTString()
  } else {
    var a = ""
  }
  document.cookie = c + "=" + d + a + "; path=/"
}
function readCookie(b) {
  var e = b + "=";
  var a = document.cookie.split(";");
  for (var d = 0; d < a.length; d++) {
    var f = a;
    while (f.charAt(0) == " ") {
      f = f.substring(1, f.length)
    }
    if (f.indexOf(e) == 0) {
      return f.substring(e.length, f.length)
    }
  }
  return null
}
function eraseCookie(a) {
   createCookie(a, "", -1)
};