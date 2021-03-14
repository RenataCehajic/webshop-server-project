const { Router } = require("express");
const Order = require("../models").order;
const productOrder = require("../models").product_order;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (e) {
    next(e);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const orders = await Order.findAll({ where: { userId } });
    if (orders.length < 1) {
      res.status(404).send("No orders found for this customer!");
    } else {
      res.json(orders);
    }
  } catch (e) {
    next(e);
  }
});

router.post("/:userId", async (req, res, next) => {
  try {
    const { list } = req.body;
    const { userId } = req.params;
    if (!list) {
      res.status(400).send("missing parameters");
    } else {
      const newOrder = await Order.create({
        userId: userId,
      });
      const newOrderProducts = await list.map((product) =>
        product_order.create({
          orderId: newOrder.id,
          productId: product.productId,
          quantity: product.quantity,
        })
      );
      res.send(newOrderProducts);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
