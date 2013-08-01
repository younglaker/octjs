## Oct.sort.fn

### Description

Some sort method for javascript sort() function.

### Syntax
1.Ascending order.
	Oct.sort.asc  => value

2.Descending order.
	Oct.sort.des  => value

3.Separate the integer and floating point numbers.
	Oct.sort.depNum  => value

4.Case insensitive and ascending order.
	Oct.sort.noCaseAsc  => value

5.Case insensitive and descending order.
	Oct.sort.noCaseDes  => value

### Demo

1.Examples.

	var a = [3, 6, 9, 8, 4, 10, 0];
	a.sort(Oct.sort.asc);		//[0, 3, 4, 6, 8, 9, 10]
	a.sort(Oct.sort.des);		//[10, 9, 8, 6, 4, 3, 0]
	var b = [3.6, 6, 5.5, 9, 2.2];
	b.sort(Oct.sort.depNum);		//[6, 9, 2.2, 5.5, 3.6]
	var c = ["d", "C", "a", "b"];
	c.sort(Oct.sort.noCaseAsc);		//["A", "b", "C", "d"]
	c.sort(Oct.sort.noCaseDes);		//["d", "C", "b", "A"]