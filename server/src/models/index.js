// used to connect to db and set config
const fs = require("fs");
const path = require("path");
const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config");

const db = {};

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
);

// set all files in models to use seqelize (to not use requre/import again)
fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js")
  .forEach((file) => {
    // const model = sequelize.import(path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

// Object.keys(db).forEach(function (modelName) {
//   if ('associate' in db[modelName]) {
//     db[modelName].associate(db)
//   }
// })

// declare vars for other files to be able to use it
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
