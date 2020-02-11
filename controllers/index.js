const { resolveShortUrl, addShortUrl } = require("../use-cases");
const makeGetShortUrl = require("./get-shorturls");
const makePostShortUrl = require("./post-shorturl");

const getShortUrl = makeGetShortUrl({ resolveShortUrl });
const postShortUrl = makePostShortUrl({ addShortUrl });

const shorturlController = Object.freeze({
  getShortUrl,
  postShortUrl
});

module.exports = { shorturlController, getShortUrl, postShortUrl };
