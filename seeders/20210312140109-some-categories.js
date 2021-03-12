"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "product_categories",
      [
        {
          name: "Work",
          product_id: 1,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Relax",
          product_id: 3,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("product_categories", null, {});
  },
};
