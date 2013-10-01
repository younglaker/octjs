## Oct.localStorage.set( )

### Description

Set localStorages.

### Syntax
	Oct.localStorage.set({item: "item", value: "value"}[, {list2} ... ]);  => none

- item: <String> <Essential> localStorage item name.

- value: <String> <Essential> localStorage value.

### Demo

1.Set item1.

	Oct.localStorage.set({item: "item1", value: "1"});

2. Set more localStorages.

	Oct.localStorage.set(
		{item: "id5", value: "5"},
		{item: "id6", value: "66"}
	);