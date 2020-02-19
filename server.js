"use strict";

const express = require("express");

const cors = require("cors");
const helmet = require("helmet");

const { config } = require("./config");

const makeCallback = require("./express-callback");
const makeRedirect = require("./express-callback/redirect");

const { getShortUrl, postShortUrl } = require("./controllers");

const app = express();

// Basic Configuration
const PORT = config.port || 5000;

/** this project needs a db !! **/
// mongoose.connect(process.env.MONGOLAB_URI);

app.use(cors({ origin: process.env.CLIENT_URL })); // TODO: set origin depending on process.env.NODE_ENV
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/api/shorturl", makeCallback(getShortUrl));
app.get("/:shorturl", makeRedirect(getShortUrl));
app.get("/api/shorturl/:shorturl", makeCallback(getShortUrl));
app.post("/api/shorturl/new", makeCallback(postShortUrl));

app.listen(PORT, function() {
  console.log(`🚀 Express listening: http://localhost:${PORT} `);
});
