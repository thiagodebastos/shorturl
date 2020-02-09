const makeDb = require("../db/knex");
const makeShortUrlsDb = require("./shorturls-db");

const database = makeDb();
const shortUrlsDb = makeShortUrlsDb({ database });

module.exports = shortUrlsDb;
