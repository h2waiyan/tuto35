const express = require("express");
const cors = require("cors");

const db = require("./models/index");

const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

db.sequelize
  .sync()
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Failed to load db : " + err.message);
  });

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Sever is running....",
  });
});

require("./routes/tutorial.route")(app);

app.listen(3030, () => {
  console.log("Server is listening on Port 3030");
});
