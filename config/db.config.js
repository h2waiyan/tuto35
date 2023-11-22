//CLOUD
module.exports = {
  HOST: "localhost",
  USER: "santoe",
  PASSWORD: "santoe",
  DB: "blogs",
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
