const shortUrlsDb = require("../data-access");
const makeListShortUrls = require("./list-shorturls");
const makeAddShortUrl = require("./create-shorturl");

const listShortUrls = makeListShortUrls({ shortUrlsDb });
const addShortUrl = makeAddShortUrl({ shortUrlsDb });

module.exports = { listShortUrls, addShortUrl };
