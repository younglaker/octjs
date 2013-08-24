## O() or Oct()

### Description

Create a Oct collection object by performing a CSS selector, wrapping DOM nodes, or creating elements from an HTML string.

### Syntax
	O("selector[, root_id, tag]")  => collection

- selector: the elements you want. The id ueses prefix "#", class ueses ".", and tag ueses "&".

- root_id: the root's id of the elements'root you want.

- tag: point out the specific tag of the selector. If none, it's document.

### Demo

1.Select a id elememt.

	O("#buddy")


2.Select a class elememt.

	Oct(".buddy")

3.Select all the div tags.

	O("&div") // also O("&Div"), O("&DIV")

4.Select class buddy in all p tags.

	O(".buddy", null, "&p")

4.Select class buddy whose root have id dad.

	O(".buddy", "#dad")