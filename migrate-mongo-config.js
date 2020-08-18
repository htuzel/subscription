const config = {
  mongodb: {
    url: "mongodb://localhost:27017",

    databaseName: "subscription",

    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },

  migrationsDir: "migrations",

  changelogCollectionName: "changelog",

  migrationFileExtension: ".js"
};

module.exports = config;