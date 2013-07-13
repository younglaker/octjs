## Oct.cookie.set( )

### Description

Set cookies.

### Syntax
	Oct.cookie.set({item: "item", value: "value"[, expires: expires, path: "path", domain: "domain", secure: "secure"}, {list2} ... ]);  => none

- item: <String> <Essential> Cookie item name.

- value: <String> <Essential> Cookie value.

- expires: <Number> <Optional, default: delete when close the browser> Expires day. Unit is day.

- path: <String> <Optional, default: this> Path

- domain: <String> <Optional, default: this> Domain

- secure: <Bool> <Optional, default: false> If true, use https, otherwise http.

### Demo

1.Set item1.

	Oct.cookie.set({item: "item1", value: "1"});

2. Set more cookies and keep them for 7 days.

	Oct.cookie.set({item:"id5", value:"5", expires: 7}, {item:"id6", value:"66", expires: 7});