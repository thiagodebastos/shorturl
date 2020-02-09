const shortUrlsDb = require("../data-access");
const makeresolveShortUrl = require("./resolve-shorturl");

const resolveShortUrl = makeresolveShortUrl({ shortUrlsDb });

module.exports = { resolveShortUrl };
