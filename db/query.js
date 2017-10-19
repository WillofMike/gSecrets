const pg = knex(config.development);


pg.select().from('gSecrets')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
