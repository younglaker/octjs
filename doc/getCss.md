## .getCss()

### Description

 Get the value of style properties for the  element.

### Syntax
	O("").getCss(sting1[, sting2, sting3 ...])  => value

### Demo

1.Get the left value of #buddy

	<div id="buddy" style="left: 30px;">hi</div>
	var a = O("#buddy").getCss("left"); => return "30px"

2.Get the left and top value of #buddy

	<div id="buddy" style="left: 30px; top: 100px;">hi</div>
	var a = O("#buddy").getCss("left", "top"); => return "30px, 100px"

