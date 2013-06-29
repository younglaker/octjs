## Oct.randomNum( )

### Description

Create random number in specific range.

### Syntax
	Oct.randomNum = function(start, stop, type)  => number

- start: the minimum value (includes).

- stop: the max value (includes).

- type: "float"(default), "int"

### Demo

1.Log a rangdom float number range from 1.5 to 10:

	console.log(Oct.randomNum(1.5, 10));

2.Log a rangdom int number range from 5 to 25:

	console.log(Oct.randomNum(1, 25, "int"));

