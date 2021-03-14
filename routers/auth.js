const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const bcrypt = require("bcrypt");
const authMiddleware = require("../auth/middleware");
const User = require("../models").user;
const Order = require("../models").order;

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("email test:", email);
    console.log("password test:", password);
    const user = await User.findOne({ where: { email } });

    const passwordCorrect = bcrypt.compareSync(password, user.password);

    if (!passwordCorrect) {
      return res.status(400).send("Wrong password");
    }

    const data = { userId: user.id };
    const jwt = toJWT(data);

    return res.send({ jwt });
  } catch (error) {
    console.log(error);
  }
});

router.get("/test", async (request, response, next) => {
  try {
    const { authorization } = request.headers;

    if (!authorization) {
      return response
        .status(400)
        .send("You must include an authorization header");
    }

    const parts = authorization.split(" ");
    const bearer = parts[0] === "Bearer";

    if (!bearer) {
      return response.status(400).send("You must be the bearer");
    }

    const hasJwt = parts[1] && parts[1].length;
    if (!hasJwt) {
      return response.status(400).send("You must include a JWT");
    }

    const data = toData(parts[1]);
    const { userId } = data;

    const allOrders = await Order.findAll({ where: { userId } });

    response.json(allOrders);
  } catch (error) {
    response.status(400).send("Invalid JWT token");
  }
});

router.get("/auth", authMiddleware, (req, res) => {
  res.send({
    message: `Thanks for visiting! ${req.user.email}.`,
  });
});

module.exports = router;
