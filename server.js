"use strict";

const express = require("express");

const cors = require("cors");

const { config } = require("./config");

const makeCallback = require("./express-callback");

const { getShortUrl } = require("./controllers");

const app = express();

// Basic Configuration
const PORT = config.port || 5000;

/** this project needs a db !! **/
// mongoose.connect(process.env.MONGOLAB_URI);

app.use(cors({ origin: `http://localhost:3001` })); // TODO: set origin depending on process.env.NODE_ENV
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here

app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/api/shorturl/:shorturl", makeCallback(getShortUrl));

app.listen(PORT, function() {
  console.log(`🚀 Express listening: http://localhost:${PORT} `);
});
