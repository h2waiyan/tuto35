module.exports = (app) => {
  const tutorials = require("../controller/tutorial.controller");

  var router = require("express").Router();

  router.post("/", tutorials.create);
  //   router.get("/", tutorials.getalltuto);

  app.use("/api/v1/tutorials", router);
};
