## Oct.mergeSort( )

### Description

Sort the Array through merge algorithm.

### Syntax
	Oct.mergeSort(array[, positive])  => value

- array: <Array>

- positive: <Bool>, <Default = true>. Whether is positive sequence.

### Demo

1.Sort [1,4,7,3,8,2,5,9].

	var m = Oct.mergeSort([1,4,7,3,8,2,5,9]);
	console.log(m); // [1, 2, 3, 4, 5, 7, 8, 9];
	var n = Oct.mergeSort([1,4,7,3,8,2,5,9], false);
	console.log(n); // [9, 8, 7, 5, 4, 3, 2, 1];