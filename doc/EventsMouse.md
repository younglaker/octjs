## Mouse Events: click, ,  and so on

- click(function() {})

- hover(function() {})

- mouseover(function() {})

- mouseout(function() {})

- mousemove(function() {})

- mousedown(function() {})

- mouseup(function() {})

### Description

The function can be recognized easily by the name.

### Syntax
	O("").eventName(function() {})  => self 

### Demo

1.Set height as 300px for #buddy, and when click it, alert "hi".

	O("#buddy").setCss({height:"300px"}).click(function(){
		alert("hi");
	});

