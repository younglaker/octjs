## html( )

### Description

Read and insert content.

### Syntax
	O("").html()  => html
	O("").html(content)  => self

- content: <String>. words or tags.

### Demo

1.Insert a image in #buddy.

	O("#buddy").html("<img src='img/oct.png' alt=''>");

2.Insert a sentence in #buddy.

	O("#buddy").html("Hello world~");

3.Read #buddy's html.

	O("#buddy").html("");