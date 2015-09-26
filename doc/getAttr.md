## .getAttr()

### Description

Get the value of attribute properties for the  element

### Syntax

	O("").getAttr(sting)  => self

### Demo

1.Get the idvalue of #buddy

	<div id="buddy">hi</div>
	var a = O("#buddy").getAttr("id"); => return "buddy"
