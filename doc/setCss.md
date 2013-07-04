## .setCss( )

### Description

Set css property.

### Syntax
	O("").setCss({ property: value, property2: value2, ... })  => self
	// PS: make sure you have use "{}" in "()".

### Demo

1.Set some css property for #buddy

	O("#buddy").setCss({top: "20px", backgroundColor: "#f00"});
	O("#buddy").setCss({"left": "50px", "color": "#eee"});
	// PS: the property can be wrap by double quotation marks or not.

