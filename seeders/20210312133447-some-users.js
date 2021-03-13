"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "Giampiero de Vita",
          email: "giam@redux.com",
          password: "banana",
          address: "Amsterdam West",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Renata Cehajic",
          email: "peer@redux.com",
          password: "peer",
          address: "Amsterdam East",
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Vesna Vravnik",
          email: "emma@redux.com",
          password: "mango",
          address: "Amsterdam South",
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
