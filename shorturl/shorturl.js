function buildMakeShortUrl({ counter, base62 }) {
  return function makeShortUrl({ url }) {
    const ONE_YEAR = 365 * 24 * 60 * 60 * 1000;
    const createdAt = new Date().getTime();
    const expiresOn = createdAt + ONE_YEAR;
    const shortUrl = base62(counter).encode;

    return Object.freeze({
      getCreatedOn: () => createdOn,
      getExpiresOn: () => expiresOn,
      getShorturl: () => shortUrl,
      getUrl: () => url
    });
  };
}

module.exports = buildMakeShortUrl;
