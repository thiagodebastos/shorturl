// const base62 = require("base62");
const base62 = require("../helpers/base62");
const buildMakeShortUrl = require("./shorturl");

let count = 0;

// FIXME: this counter has to come from the server. Something needs to keep
// count (eg Redis). Otherwise the counter will reset when the server goes down,
// meaning that POSTs will fail with a duplicate key error.
function counter() {
  return count++;
}

const makeShortUrl = buildMakeShortUrl({ counter, base62 });

module.exports = { makeShortUrl };
