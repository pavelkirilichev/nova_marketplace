const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.listen(3001, () => {
  console.log("server start on 3001");
});
