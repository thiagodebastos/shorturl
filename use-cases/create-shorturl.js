const makeShortUrl = require("../shorturl");
function makeAddShortUrl({ shortUrlDb }) {
  return async function createShortUrl(url) {
    const shortUrl = makeShortUrl({ url });
    const exists = await shortUrlDb.findByShortUrl(/** */);
  };
}
