const { default: mongoose } = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    title: String,
    rating: Number,
    description: String,
    cast: String,
  },
  { collection: "Movies" }
);

const Movie = mongoose.model("Movies", movieSchema);

module.exports = Movie;
