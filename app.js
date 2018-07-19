var express =require("express");
var app =express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	var campgrounds = [
	{name: "Babusar Top", image: "https://www.photosforclass.com/download/pixabay-1208201"},
	{name: "Kashmir", image: "https://www.photosforclass.com/download/flickr-6333668591"},
	{name: "Chitral", image: "https://www.photosforclass.com/download/pixabay-1846142"}
	]

	res.render("campgrounds",{campgrounds:campgrounds});
});
app.post("/campgrounds", function(req, res){
	res.send("you hit the post route!")	
});

app.listen(3000, function() { 
	console.log('YelpCamp server has started!');
});