## String.lengthdb( )

### Description

Count the double bytes words.

### Syntax
	str.trim()  => value

### Demo

1.Count some string's length.

	console.log("你好".lengthdb()); // 4
	console.log("hi".lengthdb()); // 2
	console.log("你好hi".lengthdb()); // 6

2. Compare "String.lengthdb()" with "String.length".
	
	console.log("你好".length); // 2
	console.log("你好".lengthdb()); // 4
	console.log("你好22  ".length); // 4
	console.log("你好22  ".lengthdb()); // 8