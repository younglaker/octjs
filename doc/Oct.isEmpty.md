## Oct.isEmpty( )

### Description

Check a string whether is empty.

### Syntax
	Oct.isEmpty(str);  => boolean

- If return true, means empty; otherwise not. PS: a sapce string will be recognized as empty.

### Demo

1.Check variable "buddy" whether is empty.

	var buddy = "hi";
	console.log(Oct.isEmpty(buddy)); // false
	buddy = "    ";
	console.log(Oct.isEmpty(buddy)); // true