
// seeds/initial_movies.js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {name: 'Mackenzie Nickle'},
        {name: 'Madison Yancey'},
        {name: 'Mike Blumberg'},
        {name: 'Tanner Anderson'},
        {name: 'Emmanuel Londono'},
     
      ]);
    });
};