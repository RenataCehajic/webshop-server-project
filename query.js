const User = require("./models").user;
const Product = require("./models").product;
const Order = require("./models").order;
const ProductCategory = require("./models").product_category;

// const getAllUsers = async () => {
//   try {
//     const users = await User.findAll();
//     console.log(users);
//   } catch (e) {
//     console.log("error");
//     console.log(e.message);
//   }
// };

// getAllUsers();

const getOneUser = async () => {
  try {
    const user = await User.findByPk(3);
    console.log(user.get({ plain: true }));
  } catch (e) {
    console.log("error");
    console.log(e.message);
  }
};

// getOneUser();

// Most used query methods: CRUD => Create Read Update Delete
// READ: findAll, findByPk, findOne
// CREATE: .create
// UPDATE: .update
// DELETE: .destroy

const getAllProducts = async () => {
  try {
    const items = await Product.findAll();
    const cleanLog = items.map((item) => item.get({ plain: true }));
    console.log(cleanLog);
  } catch (e) {
    console.log(e.message);
  }
};

// getAllProducts();

const getOneProduct = async (id) => {
  try {
    const item = await Product.findByPk(id);
    console.log(item.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
};

// getOneProduct(2);

const getAllPriceyProducts = async () => {
  try {
    const items = await Product.findAll({
      where: { productCategoryId: 1 },
    });
    const cleanLog = items.map((item) => item.get({ plain: true }));
    console.log(cleanLog);
  } catch (e) {
    console.log(e.message);
  }
};

// getAllPriceyProducts();

const getAllUsers = async () => {
  try {
    const items = await User.findAll();
    const cleanLog = items.map((item) => item.get({ plain: true }));
    console.log(cleanLog);
  } catch (e) {
    console.log(e.message);
  }
};

// getAllUsers();

const signUpNewUser = async () => {
  try {
    const newGuy = {
      email: "new@b.com",
      fullName: "Hedwig Poep",
      password: "kiwi",
      address: "Zunderdorp",
      isAdmin: false,
    };

    const newUser = await User.create(newGuy);
    console.log(newGuy);
  } catch (e) {
    console.log(e.message);
  }
};

// signUpNewUser();

const updateUserAddress = async (id, address) => {
  try {
    const thisSpecificUser = await User.findByPk(id);

    if (!thisSpecificUser) {
      console.log("That user does not exist");
    } else {
      await thisSpecificUser.update({ address });
      console.log(thisSpecificUser);
    }
  } catch (e) {
    console.log(e.message);
  }
};

// updateUserAddress(6, "Sporenburg");

const getUserWithOrders = async (id) => {
  try {
    const user = await User.findByPk(id, { include: [Order] });
    console.log(user.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
};

// getUserWithOrders(1);

const getOrderWithProducts = async (id) => {
  try {
    const order = await Order.findByPk(id, { include: [Product] });
    console.log(order.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
};

// getOrderWithProducts(3);

const getCompleteUserProfile = async (id) => {
  try {
    const user = await User.findByPk(id, {
      include: [{ model: Order, include: [Product] }],
    });
    console.log(user.get({ plain: true }).orders[0]);
  } catch (e) {
    console.log(e.message);
  }
};

// getCompleteUserProfile(1);

const getOneOrderWithProducts = async (id) => {
  try {
    const order = await Order.findByPk(id, { include: [Product] });
    console.log(order.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
};

getOneOrderWithProducts(1);
