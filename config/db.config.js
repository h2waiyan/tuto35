//CLOUD
module.exports = {
  HOST: "dpg-cldeodvgsrdc73fk39m0-a",
  USER: "hwy",
  PASSWORD: "mcWmWF404ZkN69dd5nviVnQ3jMMBIwWP",
  DB: "tours_tu8r",
  DIALECT: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000, // 3000 30s
    idle: 10000,
  },
};

//LOCAL
// module.exports = {
//   HOST: "localhost",
//   USER: "hwy",
//   PASSWORD: "user",
//   DB: "tours",
//   DIALECT: "postgres",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000, // 3000 30s
//     idle: 10000,
//   },
// };
