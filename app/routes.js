module.exports = function(app) {
var Firebase = require('firebase');
var http = require('http');

var session = new Firebase('https://fiery-heat-3854.firebaseio.com/');
var sessionFavourite = session.child("Favourites");

var apiKey="secret";

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/api/search/:searchkey', function(request, response) {
	  var recipeName = request.params.searchkey;
	  var host = "api.bigoven.com"
	  var path = "/recipes?pg=1&rpp=25&title_kw="
	            + recipeName
	            + "&api_key=" + apiKey + "&sort=quality";
	  console.log(recipeName);
	  var post_options = {
	      hostname: host,
	      path: path,
	      method: 'GET',
	      headers: {
	          'Content-Type': 'application/json'
	      }
	  };
	  var req = http.request(post_options, function(res) {
	      var output = "";
	      var recipesObject = {};
	      var recipesArray = [];
	      res.on("data", function (chunk) {
	          output += chunk
	      })
	      res.on("error", console.log)
	      res.on("end", function () {
	          recipesObject = JSON.parse(output);
	          response.json(recipesObject);
	      })
	  }).end();
	});

	app.get('/api/favourites', function(request, response) {
	  session.once("value", function(data) {
	      response.json(data.val().Favourites);
	  });
	});

	app.post('/api/favourites', function(request, response) {
	  // Insert route for handling favourites
		var newObj = {};
		newObj = request.body;
		console.log(newObj);
		sessionFavourite.push(newObj);
	});

	app.delete('/api/favourites/:id', function(request, response) {
		console.log("Trying to delete!!!");
		if (request.params.id == undefined) return;
		// var myURL = "https://fiery-heat-3854.firebaseio.com/Favourites/.json?orderBy=%22RecipeID%22&equalTo=" + request.params.id;
		var destroyFavourite = new Firebase("https://fiery-heat-3854.firebaseio.com/Favourites/");

		response.on("error", console.log(response));
});
	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
};
