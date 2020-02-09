exports.up = function(knex) {
  return knex.schema
    .dropTableIfExists("shorturls")
    .createTable("shorturls", tbl => {
      tbl.increments().primary();
      tbl.text("url", 300);
      tbl
        .text("shorturl", 300)
        .unique()
        .notNullable();
      tbl.bigInteger("created_on");
      tbl.bigInteger("expires_on");
    });
};

exports.down = function(knex) {
  return knex.schema.dropSchemaIfExists("shorturls");
};
