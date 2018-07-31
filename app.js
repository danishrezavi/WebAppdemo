var express =require("express");
var app =express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
	{name: "Babusar Top", image: "http://www.royalhotel.pk/wp-content/uploads/2013/08/babusar-top-815x338.jpg"},
	{name: "Kashmir", image: "https://www.photosforclass.com/download/flickr-6333668591"},
	{name: "Chitral", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtW3N7KpQJs0z9dmJvMXBoLrfzjFts1T9DsFfeT7ghFl1qwIga-A"},
	{name: "Kashmir", image: "https://www.photosforclass.com/download/flickr-6333668591"},
	{name: "Chitral", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtW3N7KpQJs0z9dmJvMXBoLrfzjFts1T9DsFfeT7ghFl1qwIga-A"},
	{name: "Kashmir", image: "https://www.photosforclass.com/download/flickr-6333668591"},
	{name: "Chitral", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtW3N7KpQJs0z9dmJvMXBoLrfzjFts1T9DsFfeT7ghFl1qwIga-A"}
	];

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){


	res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
	//res.send("you hit the post route!")
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image}
	campgrounds.push(newCampground);
	res.redirect("/campgrounds")
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
})

app.listen(3000, function() { 
	console.log('YelpCamp server has started!');
});