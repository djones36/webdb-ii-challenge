const kne = require("knex");

const knexConfig = require("../knexfile");

module.exports = knex(knexConfig.development);
