function makeGetShortUrl({ listShortUrls }) {
  return async function getShortUrl(httpRequest) {
    try {
      const { shorturl } = httpRequest.params;
      const resolvedShortUrl = await listShortUrls({ shorturl });
      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 201,
        body: resolvedShortUrl
      };
    } catch (error) {
      console.log(error);
      return {
        headers: {
          "Content-Type": "application/json",
          statusCode: 400,
          body: { error: error.message }
        }
      };
    }
  };
}

module.exports = makeGetShortUrl;
