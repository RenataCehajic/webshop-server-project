"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "phone",
          productCategoryId: 1,
          description: "device to call people",
          price: 50,
          imageUrl:
            "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "laptop",
          productCategoryId: 2,
          description: "to learn coding",
          price: 700,
          imageUrl:
            "https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhcHRvcHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "television",
          description: "something to relax",
          productCategoryId: 3,
          price: 500,
          imageUrl:
            "https://images.unsplash.com/photo-1467293622093-9f15c96be70f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dGVsZXZpc2lvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "fridge",
          description: "food saver",
          productCategoryId: 1,
          price: 300,
          imageUrl:
            "https://images.unsplash.com/photo-1598107655384-ba3603b74d27?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fGZyaWRnZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "couch",
          description: "furniture for watching television",
          productCategoryId: 2,
          price: 200,
          imageUrl:
            "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y291Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "jeans",
          description: "great comfortable jeans to wear",
          productCategoryId: 2,
          price: 20,
          imageUrl:
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8amVhbnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
