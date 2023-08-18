const express = require("express");
const app = express();
const port = 3000;
const router = require("./src/router");

// Initialize EJS with Express
app.set("view engine", "ejs");

// Specify the directory for your views
app.set("views", "views");

// Middleware to serve static files from the "public" directory
app.use(express.static("public"));

// Import the JSON file
const movies = require("./movies.json");

app.use(router);

// app.get("/", (req, res) => {
//   // Render the "index" file, passing the "movies" data
//   res.render("index", { movies });
// });

// Dynamic route to retrieve movie information based on the movieName parameter
// app.get("/movie/:movieName", (req, res) => {
//   // Extract the movieName parameter from the URL
//   const movieUrl = req.params.movieName;

//   // Find the movie in the "movies" array using the URL
//   const movie = movies.find((movie) => movie.url === movieUrl);

//   // Render the "movie" file, passing the movie object
//   res.render("movie", { movie: movie, movies });
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
