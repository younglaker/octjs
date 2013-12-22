## Oct.isArray( )

### Description

Check whether an element is an array.

### Syntax
	Oct.isArray(value)  => bool

### Demo

1.Examples.

	var m ={p: 5, o: 6};
	console.log(Oct.isArray(m)); // false
	var n = [1, 2, 3];
	console.log(Oct.isArray(m)); // true
	console.log(Oct.isArray(5)); // false
