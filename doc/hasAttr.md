## .hasAttr()

### Description

Judge the element whether has the attribute property.

### Syntax

	O("").hasAttr(sting)  => Bool

### Demo

1.Judge #buddy whether has the attribute property.

	<div id="buddy">hi</div>
	var a = O("#buddy").hasAttr("id"); => return "true"
	var a = O("#buddy").hasAttr("class"); => return "false"
