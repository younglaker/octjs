## remove( )

### Description

Remove id, class or tag in an object.

### Syntax
	O("").remove("#/./&name1[, #/./&name2 ... ]")  => self

- name: The id or class name. The id has prefix "#", class has ".", and tag had "&".

### Demo

1.remove the id a and class b in #buddy.

	<div id="buddy a" class="b"></div>

	O("#buddy").remove("#a, .b");

2.remove the tag span in #buddy.

	<div id="buddy">
		<span></span>
	</div>

	O("#buddy").remove("&span");
