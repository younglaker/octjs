## son( )

### Description

Get the first level of child nodes.

### Syntax
	O("").son([selector])  => self

- selector: The specific elements you want. The id ueses prefix "#", class ueses ".", and tag ueses "&". If no specific selector, it will get all the first level of child nodes.

### Demo

1.Make #box's son tag p into red.

	<div id="box">
		<p>01</p>
		<div>02
			<p>03</p>
		</div>
		<p>04</p>
	</div>

	O("#box").son("&p").setCss({color: "red"}); // 01 and 04 turn to red.

2.Make #box's all sons into red.

	<div id="box">
		<p>01</p>
		<div>02
			<p>03</p>
		</div>
		<p>04</p>
	</div>

	O("#box").son().setCss({color: "red"}); // 01, 02, 03, 04 turn into red. 03 is inherit 02 and turn into red.
