const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  `postgres://hwy:mcWmWF404ZkN69dd5nviVnQ3jMMBIwWP@dpg-cldeodvgsrdc73fk39m0-a.oregon-postgres.render.com/tours_tu8r?ssl=true`,
  { dialect: "postgres" }
);

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.DIALECT,
//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle,
//   },
// });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model")(sequelize, Sequelize);

module.exports = db;
