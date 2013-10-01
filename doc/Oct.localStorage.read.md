## Oct.localStorage.read( )

### Description

Read localStorage value by item name.

### Syntax
	Oct.localStorage.read(item1[, item2, ... ]);  => value

- item: <String> localStorage item name.

### Demo

1.Rread name, id items.

	Oct.localStorage.set(
		{item: "name", value: "kobe"},
		{item: "id", value: "66"}
	);
	console.log(Oct.localStorage.read("name", "id"));