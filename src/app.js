const express = require("express");
const connect = require("./configs/db");
const app = express();
app.use(express.json());
const userController = require("./controllers/user.controller");
const studetController = require("./controllers/student.controller");
const evaluationController = require("./controllers/evaluation.controller");
app.use("/user", userController)
app.use("/student", studetController)
app.use("/evaluation", evaluationController)
app.listen(2300, async function () {
  await connect();
  console.log("listening on 2300 port");
});
