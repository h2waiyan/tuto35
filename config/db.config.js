module.exports = {
  HOST: "localhost",
  USER: "teacher",
  PASSWORD: "teacher",
  DB: "tuto35",
  DIALECT: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000, // 3000 30s
    idle: 10000,
  },
};
