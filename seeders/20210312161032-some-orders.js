"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          userId: 1,
          status: "sent",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          status: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          status: "on track",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          status: "failed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
