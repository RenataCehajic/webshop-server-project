"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "phone",
          description: "device to call people",
          price: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "laptop",
          description: "to learn coding",
          price: 700,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "television",
          description: "something to relax",
          price: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
