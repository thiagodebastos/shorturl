function makePostShortUrl({ addShortUrl }) {
  return async function postShortUrl(httpRequest) {
    try {
      const { url } = httpRequest.body;
      const shortUrl = await addShortUrl({ url });
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

module.exports = makePostShortUrl;
