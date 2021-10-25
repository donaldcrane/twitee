module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Posts", [
      {
      id: "c375c640-81ff-405a-89a8-460ea2f71755",
      post: "Bandits attacks",
      likes: 10,
      userId: "98e0350f-ed09-46b0-83d7-8a135afeaf84",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "a430e505-937b-4908-9422-7aa57044e85a",
      post: "Students assiociation drops demands",
      likes: 6,
      userId: "fc1f4e85-8e83-4a38-ab1e-8e4da2c6ddbb",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      id: "7cc6de97-2ed6-4422-9ce2-9ff22cc5e97a",
      post: "Son resfuse to fast, after seeing Dominos pizza advert",
      likes: 4,
      userId: "fc1f4e85-8e83-4a38-ab1e-8e4da2c6dd25",
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      id: "6cbaa746-6e42-453e-91f4-c0de15fb4b9f",
      post: "Man runs away with church offerings",
      likes: 0,
      userId: "57af7c29-efb2-434e-9fce-b87c77447aaa",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ,], 
    {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
