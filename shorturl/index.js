const base62 = require("base62");
const buildMakeShortUrl = require("./shorturl");

let count = 0;

function counter() {
  return count++;
}

const makeShortUrl = buildMakeShortUrl({ counter, base62 });
