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
        },
        {
          vin: "vinumber145672389",
          make: "bmw",
          model: "x-5",
          mileage: 190000,
          transmissionType: "automatic",
          titleStatus: "salvage"
        },
        {
          vin: "Vinumber155672389",
          make: "BMW",
          model: "x-3",
          mileage: 000030,
          transmissionType: "",
          titleStatus: ""
        }
      ]);
    });
};
