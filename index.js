const express = require("express");
const User = require("./models").user;
const PORT = process.env.PORT || 4000;

const productRouter = require("./routers/products");
const userRouter = require("./routers/users");
const authRouter = require("./routers/auth");

const app = express();

const loggingMiddleware = (req, res, next) => {
  console.log("Request incoming, trype of request", req.method);
  next();
};

//Body Parser
app.use(express.json());
app.use(loggingMiddleware);

// Registering the router to the app
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use(authRouter);

app.get("/test", (req, res) => {
  res.json("hello from server");
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
