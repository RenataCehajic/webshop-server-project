const { Router } = require("express");
const User = require("../models").user;
const bcrypt = require("bcrypt");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    console.log("Im getting all the users");
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log("body", req.body);
    const { email, fullName, password, address, isAdmin } = req.body;

    if (!email || !password) {
      res.status(400).send("Please provide an email and password");
    } else {
      const newUser = await User.create({
        email,
        fullName,
        password: bcrypt.hashSync(password, 10),
        address,
        isAdmin,
      });
      res.send(newUser);
    }
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { address } = req.body;

    const userToUpdate = await User.findByPk(id);

    console.log("new address:", address);

    if (!userToUpdate) {
      return res.status(404).send("user not found");
    }

    await userToUpdate.update({ address });

    res.send(userToUpdate);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
