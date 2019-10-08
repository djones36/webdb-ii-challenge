exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    //Primary Key
    tbl.increments();
    tbl
      .integer("vin", 17)
      .notNullable()
      .unique();
    tbl.string("make", 128).notNullable();
    tbl.string("model", 128).notNullable();
    tbl.integer("mileage", 6).notNullable();
    tbl.string("transmissionType", 128);
    tbl.string("titleStatus", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
