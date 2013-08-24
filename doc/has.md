## has( )

### Description

Select the object which has the specifical id, class or tag.

### Syntax
	O("").has("#/.name1[, #/.name2 ... ]")  => self

- name: The id or class name. The id ueses prefix "#", class ueses ".", and tag ueses "&".

### Demo

1.Select the .buddy which has id a and class b.

	<div id="buddy" class="b"></div>
	<div id="buddy a"></div>
	<div id="buddy a" class="b"></div>

	O(".buddy").has("#a, .b").setCss({color:"#f0f"}); // the third one

2.Select the .buddy which has span tag.

	<div id="buddy">
		<span></span>
	</div>
	<div id="buddy">
		<p></p>
	</div>

	O(".buddy").has("&tag").setCss({color:"#f0f"}); // the first one