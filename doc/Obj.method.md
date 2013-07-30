## Obj.method()

### Description

Extend method of basic types of objects.

### Syntax
	Obj.extend("methodName", function() {});  => self

- Obj: Function/String/Number/Boolen/Array/RegExp

### Demo

1.Extend a method to get integer part for Number.

	Number.method("int", function() {
		return Math[this < 0 ? "ceil" : "floor"](this);
	});
	var a = 6.3.int();
	console.log(a); // 6

2.Extend a method to count double bytes words for Sting.

	String.method("lengthdb", function() {
		var counts = 0, len = this.length;
		if (len) {
			for (var i = len; i--;) {
				if (this.charCodeAt(i) > 255) {
					counts += 2;
				} else {
					counts++;
				}
			}
			return counts;
		} else {
			return 0;
		}
	});
	var a = "你好".lengthdb();
	console.log(a);		//4