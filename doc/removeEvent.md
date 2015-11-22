## removeEvent( )

### Description

Add event.

### Syntax

  O("").removeEvent(eventType, fn); // return self

- eventType: <String>. "click", "mousemove", "keyup" and so on.

- fn: <Funtion>. 

### Demo

1.Set width and height as 150px for ".buddy", and when click it, alert "hi".

  var buddy = O(".buddy");
  buddy.addEvent("click", onclick);

  function onclick() { 
    alert("Bye, I will be removed");
    buddy.removeEvent("click", onclick);
  }

  