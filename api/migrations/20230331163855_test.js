exports.up = function(knex) {
    return knex.schema.createTable('authors', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('name');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('authors');
  };