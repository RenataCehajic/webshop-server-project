const express = require("express");
const User = require("./models").user;
const PORT = process.env.PORT || 4000;

const app = express();

// app.get("/test", (req, res) => {
//   res.json("hello from server");
// });

app.get("/users", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
