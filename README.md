# Calendar Service

This is a node.js training project. Intended to work along with [Flock](https://www.flock.co).

# Setup

#### To run web server:
	$ cd src
	$ node web-server.js

Web server runs on port 3000.

Use [ngrok](https://ngrok.com) to create a public URL to a local web server on your machine.


#### To run bot server:
	$ cd src
	$ WEB_SERVER_URL="type URL here" node bot-server.js

Bot server runs on port 8000.

Bot server expects json body with the following format:

	{ "text": "user input" }
