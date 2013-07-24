## Oct.matrix( )

### Description

Create one or two-dimensional array.

### Syntax
	Oct.matrix(line, row, init)  => array

- line: <Positive Number>.

- row: <Positive Number>.

- init: <Any>. default = "1".

### Demo

1.Creat a one-dimensional array called m.

	var m = Oct.matrix(1,5,3);
	console.log(m); // [3, 3, 3, 3, 3]
	m[3] = 8;
	console.log(m[3]); //8

2.Creat a two-dimensional array called m.

	var m = Oct.matrix(2, 3, 0);
	console.log(m); // [[0, 0, 0], [0, 0,0 ]]
	console.log(m[3][2]); // 3
	m[3][2] = 8;
	console.log(m[3][2]); // 8