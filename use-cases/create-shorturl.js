const { makeShortUrl } = require("../shorturl");

function makeAddShortUrl({ shortUrlsDb }) {
  return async function addShortUrl({ url }) {
    const shorturl = makeShortUrl({ url });
    const existingShortUrl = await shortUrlsDb.findByUrl({ url });
    if (existingShortUrl.length > 0) {
      return existingShortUrl;
    }

    // const newShortUrl = await shortUrlsDb.insert({ shorturl });

    const newShortUrl = await shortUrlsDb.insert({
      created_on: shorturl.getCreatedOn(),
      expires_on: shorturl.getExpiresOn(),
      url: shorturl.getUrl(),
      shorturl: shorturl.getShorturl()
    });

    return newShortUrl;
  };
}

module.exports = makeAddShortUrl;
