// TODO make 2 configs DRY

module.exports = {

  applications: [{

    name: '<%= title %>',
    models: require('./models'),
    modelsDb: require('./modelsDb')

  }],

  db: {
    mongo: {
      connection: "mongodb://localhost/rjanko"
    }
  }

};
