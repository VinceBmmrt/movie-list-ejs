const movies = require("../movies.json");

const controller = {
  homePage: (req, res) => {
    res.render("index", { movies });
  },
  gamePage: (req, res) => {
    // Extract the movieName parameter from the URL
    const movieUrl = req.params.movieName;

    // Find the movie in the "movies" array using the URL
    const movie = movies.find((movie) => movie.url === movieUrl);

    // Render the "movie" file, passing the movie object
    res.render("movie", { movie: movie, movies });
  },
  searchPage: (req, res) => {
    //rendre la bonne vue index.ejs
    res.render("search");
  },
  resultPage: (req, res) => {
    const { recherche } = req.query; // destructuration pour acceder a la propriété recherche req
    const result = recherche;
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(recherche.toLowerCase())
    );
    console.log("🚀 ~ results:", results);
    console.log("🚀 ~ recherche:", recherche);

    res.render("searchResults", {
      results: results,
      result: result,
    });
  },
};
module.exports = controller;
