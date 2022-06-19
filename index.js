const express = require("express");
const cors = require("cors");
const connectDB = require("./connection/conn");
const movies = require("./routes/movies");

const app = express();

app.use(cors());
app.use(express.json());

app.get("", (req, res) => {
  res.send("I am working");
});

const port = process.env.PORT || 8080;

const connect = async () => {
  await connectDB();

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
};

app.use("/movies", movies);

connect();
