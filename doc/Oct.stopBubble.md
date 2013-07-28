## Oct.stopBubble()

### Description

Cancle event bubbling.

### Syntax
	Oct.stopBubble();  => none

### Demo

1.Stop bubbling.

	O("#test2").setCss({height:"300px"}).click(function(){
		alert("message");
		Oct.stopBubble();
	});