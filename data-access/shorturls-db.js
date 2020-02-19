const {
  InvalidPropertyError,
  UniqueConstraintError
} = require("../helpers/errors");

function makeShortUrlsDb({ database }) {
  return Object.freeze({
    findAll,
    findById,
    findByUrl,
    findByShortUrl,
    insert
  });

  async function findAll() {
    const db = database;
    const result = await db("shorturls");
    return result;
  }

  async function findById({ id }) {
    const db = database;
    const result = await db("shorturls").where({ id });
    return result;
  }

  async function findByShortUrl({ shorturl }) {
    const db = database;
    const result = await db("shorturls").where({ shorturl });
    return result[0];
  }

  async function findByUrl({ url }) {
    const db = database;
    const result = await db("shorturls").where({ url });
    return result;
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
          throw new UniqueConstraintError(error);
        }
        // TODO: review knex-specific error-code
        if (error.code === "42703") {
          throw new InvalidPropertyError(error.message);
        }
        return error;
      });

    const result = await findById({ id });
    return result;
  }
}

module.exports = makeShortUrlsDb;
