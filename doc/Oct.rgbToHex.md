## Oct.rgbToHexr()

### Description

Exchange RGB color to HEX color.

### Syntax
	Oct.rgbToHex(color);  => value


### Demo

1.Get the current browser information.

	Oct.rgbToHex("rgb(145,25,145)"); // #911991

2.Exchange RGB backround color to HEX in chrome.

	Oct.rgbToHex(O(this).getCss("background-color")[0]);

