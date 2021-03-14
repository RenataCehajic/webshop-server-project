const express = require("express");
const PORT = process.env.PORT || 4000;

const productRouter = require("./routers/products");
const userRouter = require("./routers/users");
const authRouter = require("./routers/auth");
const orderRouter = require("./routers/orders");

const app = express();

//Body Parser
app.use(express.json());

// Registering the router to the app
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/", authRouter);
app.use("/orders", orderRouter);

// app.get("/test", (req, res) => {
//   res.json("hello from server");
// });

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
