## Oct.extend( )

### Description

Extend method of Oct object.

### Syntax
	Oct.extend("methodName", function() {});  => self

### Demo

1.____

	Oct.extend("hi", function() {
		console.log("hi");
	});
	Oct.hi();