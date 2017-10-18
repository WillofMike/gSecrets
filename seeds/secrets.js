
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('secrets').del()
    .then(function () {
      // Inserts seed entries
      return knex('secrets').insert([
        {id: 1, secret: 'doesnt have any secrets '},
        {id: 2, secret: 'is really good at music'},
        {id: 3, secret: 'he created an amazing synth pad'},
        {id: 4, secret: 'knows all the industry secrets'},
      ]);
    });
};
