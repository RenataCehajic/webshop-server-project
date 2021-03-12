const express = require("express");
const User = require("./models").user;
const PORT = process.env.PORT || 4000;

const app = express();

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
