## Oct.ajax()

### Description

Perform an asynchronous HTTP (Ajax) request.

### Syntax
	Oct.ajax()  => 

- method: "GET"(default), "POST".

- datatype: "json"(default), "xml", "html", "script", "text".

- "url"

- "senddata": a hash table contains the data which will be send to the server.

- "success": do something when ajax successes, it will return the respond send from remote.

- "fail": do something when ajax failes.

### Demo

1.Demo

			Oct.ajax({
				"method": "POST",
				"datatype": "json",
				"url": "http://hi.com/test",
				"senddata": {"act": state, "people": id},
				"success": function(msg) {
					console.log(msg);
				},
				"fail": function() {
					console.log("fail");
				}
			});