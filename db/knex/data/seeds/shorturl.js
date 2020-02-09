const ONE_YEAR = 31536000000;
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("shorturls")
    .del()
    .then(function() {
      return knex("shorturls").insert([
        {
          id: 1,
          url: "https://google.com.au",
          shorturl: "n",
          created_on: 1577845491000,
          expires_on: 1577845491000 + ONE_YEAR
        },
        {
          id: 2,
          url: "http://thiagodebastos.com",
          shorturl: "o",
          created_on: 1578104691000,
          expires_on: 1578104691000 + ONE_YEAR
        },
        {
          id: 3,
          url: "https://thiago.codes",
          shorturl: "p",
          created_on: 1580783091000,
          expires_on: 1580783091000 + ONE_YEAR
        }
      ]);
    });
};
