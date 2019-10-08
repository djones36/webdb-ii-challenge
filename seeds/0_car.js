exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("car")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("car").insert([
        {
          vin: "123456789vinumber",
          make: "jeep",
          model: "wrangler",
          mileage: 100000,
          transmissionType: "manual",
          titleStatus: "clean"
        }
      ]);
    });
};
