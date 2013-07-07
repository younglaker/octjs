## addEvent( )

### Description

Add event.

### Syntax
	O("").addEvent(eventType, fn);  => self

- eventType: <String>. "click", "mousemove", "keyup" and so on.

- fn: <Funtion>. 

### Demo

1.Set width and height as 150px for ".buddy", and when click it, alert "hi".

	O(".buddy").addEvent("click", function(){
		alert("hi");
	})
	.setCss({
		width: "150px",
		height: "150px"
	});

