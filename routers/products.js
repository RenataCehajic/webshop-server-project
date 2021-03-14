const { Router } = require("express");
const Product = require("../models").product;

const router = new Router();

// router.get("/", async (req, res, next) => {
//   console.log("Im in the router");
//   res.send("responding from the router");
// });

//get all products

router.get("/", async (req, res, next) => {
  const limit = req.query.limit || 25;
  const offset = req.query.offset || 0;

  try {
    const products = await Product.findAndCountAll({ limit, offset });
    res.send(products);
  } catch (error) {
    next(error);
  }
});

//get one specific product
router.get("/:productId", async (req, res) => {
  const productId = parseInt(req.params.productId);
  const product = await Product.findByPk(productId);
  if (!product) {
    res.status(404).send("Product not found");
  } else {
    res.send(product);
  }
});

// router.get("/", async (req, res, next) => {
//   try {
//     const categories = await Category.findAll({
//       include: [Product],
//     });
//     res.json({ categories });
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = router;
