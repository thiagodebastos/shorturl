function makeGetShortUrl({ resolveShortUrl }) {
  return async function getShortUrl(httpRequest) {
    try {
      const { shorturl } = httpRequest.params;
      const shortUrl = await resolveShortUrl({ shorturl });
      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 201,
        body: { shortUrl }
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
