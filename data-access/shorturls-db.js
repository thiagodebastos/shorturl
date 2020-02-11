function makeShortUrlsDb({ database }) {
  return Object.freeze({
    findById,
    findByUrl,
    findByShortUrl,
    insert
  });

  async function findById({ id }) {
    const db = database;
    const contact = await db("shorturls").where({ id });
    return contact;
  }

  async function findByShortUrl({ shorturl }) {
    const db = database;
    const contact = await db("shorturls").where({ shorturl });
    return contact;
  }

  async function findByUrl({ url }) {
    const db = database;
    const contact = await db("shorturls").where({ url });
    return contact;
  }

  async function insert(shorturl) {
    const db = database;
    const id = await db("shorturls")
      .insert({ ...shorturl })
      .returning("id")
      .then(([id]) => id)
      .catch(error => {
        // TODO: review knex-specific error-code
        if (error.code === "23505") {
          // throw new UniqueConstraintError(error);
          throw new Error(error);
        }
        // TODO: review knex-specific error-code
        if (error.code === "42703") {
          // throw new InvalidPropertyError(error.message);
          throw new Error(error.message);
        }
        return error;
      });

    const result = await findById({ id });
    return result;
  }
}

module.exports = makeShortUrlsDb;
