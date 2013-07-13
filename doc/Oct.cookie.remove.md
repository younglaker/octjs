## Oct.cookie.remove( )

### Description

Remove cookies by cookie item name.

### Syntax
	Oct.cookie.remove(item1[, item2, ... ]);  => none

- item: <String> Cookie item name. If no item, it will remove all the cookies.

### Demo

1.Remove name, id items.

	Oct.cookie.remove("name", "id");

2.Remove all the cookies.

	Oct.cookie.remove();