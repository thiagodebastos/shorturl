const { resolveShortUrl } = require("../use-cases");
const makeGetShortUrl = require("./get-shorturls");

const getShortUrl = makeGetShortUrl({ resolveShortUrl });

const shorturlController = Object.freeze({
  getShortUrl
});

module.exports = { shorturlController, getShortUrl };
