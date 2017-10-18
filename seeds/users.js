
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'mdub', email: 'mike@gmail.com', code: '1234'},
        {id: 2, username: 'ddub', email: 'dave@gmail.com', code: '5678'},
        {id: 3, username: 'adub', email: 'andy@gmail.com', code: '9123'},
        {id: 4, username: 'jdub', email: 'jake@gmail.com', code: '4567'},
      ]);
    });
};
