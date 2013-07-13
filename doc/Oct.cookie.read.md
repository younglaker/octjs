## Oct.cookie.read( )

### Description

Read cookies value by item name.

### Syntax
	Oct.cookie.read(item1[, item2, ... ]);  => value

- item: <String> Cookie item name.

### Demo

1.Rread name, id items.

	console.log(Oct.cookie.read("name", "id"));