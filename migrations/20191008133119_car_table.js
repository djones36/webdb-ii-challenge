exports.up = function(knex) {
  return knex.schema.createTable("car", tbl => {
    tbl.increments();
    tbl
      .integer("vin")
      .notNullable()
      .unique();
    tbl.string("make", 128).notNullable();
    tbl.string("model", 128).notNullable();
    tbl.integer("mileage").notNullable();
    tbl.string("transmission_type", 128);
    tbl.string("title_status", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("car");
};
