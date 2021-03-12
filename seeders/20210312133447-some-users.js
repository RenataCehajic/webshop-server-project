"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "Leo Messi",
          email: "leo@messi.com",
          password: "test",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Dan Abramov",
          email: "dan@redux.com",
          password: "apple",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Giampiero",
          email: "giam@redux.com",
          password: "banana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Renata",
          email: "peer@redux.com",
          password: "peer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Emma Cehajic",
          email: "emma@redux.com",
          password: "mango",
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
