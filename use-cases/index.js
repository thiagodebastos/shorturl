const shortUrlsDb = require("../data-access");
const makeResolveShortUrl = require("./resolve-shorturl");
const makeAddShortUrl = require("./create-shorturl");

const resolveShortUrl = makeResolveShortUrl({ shortUrlsDb });
const addShortUrl = makeAddShortUrl({ shortUrlsDb });

module.exports = { resolveShortUrl, addShortUrl };
