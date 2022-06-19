const express = require("express");
const Movies = require("../models/movies");

const router = express.Router();

//Get all movies
router.get("/", async (req, res) => {
  const movies = await Movies.find();

  //   if (!movies) throw Error("No movies found");
  if (!movies.length) return res.send("No movies found");

  res.send(movies);
});

//Get movie by ID
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const movie = await Movies.findById(id);

  if (!movie) return res.send("Movie not found");

  res.send(movie);
});

//Make new movie
router.post("/", async (req, res) => {
  let movie = new Movies({ ...req.body });

  movie = await movie.save();

  res.send(movie);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const movie = await Movies.findById(id);

  if (!movie) return;

  movie.set({ ...req.body });

  const result = await movie.save();

  res.send(result);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const movie = await Movies.findByIdAndRemove(id);

  res.send(movie);
});

module.exports = router;
