const { config } = require("./config");
const { databaseURL, databaseURLProduction } = config;

const knexConfig = Object.freeze({
  development: {
    client: "pg",
    connection: databaseURL,
    migrations: {
      directory: "./db/knex/data/migrations"
    },
    seeds: { directory: "./db/knex/data/seeds" }
  },

  testing: {
    client: "pg",
    connection: databaseURL,
    migrations: {
      directory: "./db/knex/data/migrations"
    },
    seeds: { directory: "./db/knex/data/seeds" }
  },

  production: {
    client: "pg",
    connection: databaseURLProduction,
    migrations: {
      directory: "./db/knex/data/migrations"
    },
    seeds: { directory: "./db/knex/data/seeds" }
  }
});

module.exports = knexConfig;
