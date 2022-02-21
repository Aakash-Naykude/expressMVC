const app = require("./app");
const connect = require("./configs/db");
app.listen(2300, async function () {
  await connect();
  console.log("listening on 2300 port");
});
