function makeListShortUrls({ shortUrlsDb }) {
  return async function resolveShortUrl({ shorturl } = {}) {
    if (!shorturl) {
      return await shortUrlsDb.findAll();
    }

    return await shortUrlsDb.findByShortUrl({ shorturl });
  };
}

module.exports = makeListShortUrls;
