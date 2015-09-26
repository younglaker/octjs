## .setAttr()

### Description

set the value of attribute properties for the  element

### Syntax

	O("").setAttr({ property: value, property2: value2, ... })  => this

### Demo

1.set the class and title  value of #buddy

	<div id="buddy" style="left: 30px;">hi</div>
	var a = O("#buddy").setAttr({
        "title": "hello",
        "class":"sda"
    }); 
