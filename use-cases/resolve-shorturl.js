function makeresolveShortUrl({ shortUrlsDb }) {
  return async function resolveShortUrl({ shorturl } = {}) {
    if (!shorturl) {
      throw new Error("You must supply a shorturl");
    }

    const _shorturl = await shortUrlsDb.findByShortUrl({ shorturl });
    return _shorturl;
  };
}

module.exports = makeresolveShortUrl;
