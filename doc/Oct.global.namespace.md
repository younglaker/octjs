## Oct.global.namespace( )

### Description

Creat namespace.

### Syntax
	Oct.global.namespace(namespace)  => none;

- namespace: <String>. Can be one or more level.It is global, so other function can use it.

### Demo

1.Create a namespace "me", and create a varible and a function.

	Oct.global.namespace("me");
	Oct.global.me.name = "laker";
	Oct.global.me.hi = function() {
		alert("Hi, my name is " + Oct.global.me.name);
	}
	Oct.global.me.hi();

2.Create a namespace "A.cat", and create two varibles.

	Oct.global.namespace("A.cat");
	Oct.global.A.cat.a = 5;
	Oct.global.A.cat.b = 10;
	console.log(Oct.global.A.cat.a);
	console.log(Oct.global.A.cat.b);

