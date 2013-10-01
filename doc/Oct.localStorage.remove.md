## Oct.localStorage.remove( )

### Description

Remove localStorages by localStorage item name.

### Syntax
	Oct.localStorage.remove(item1[, item2, ... ]);  => none

- item: <String> localStorage item name. If no item, it will remove all the localStorages.

### Demo

1.Remove name, id items.

	Oct.localStorage.set(
		{item: "name", value: "kobe"},
		{item: "id", value: "66"}
	);
	Oct.localStorage.remove("name", "id");

2.Remove all the localStorages.

	Oct.localStorage.remove();