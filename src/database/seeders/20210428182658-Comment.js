module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Comments", [
      {
      id: "a430e505-937b-4908-9422-7aa57044e85c",
      postId: "c375c640-81ff-405a-89a8-460ea2f71755",
      userId: "fc1f4e85-8e83-4a38-ab1e-8e4da2c6ddbb",
      comment: "Na God go help Nigeria",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "c375c640-81ff-405a-89a8-460ea2f71756",
      postId: "a430e505-937b-4908-9422-7aa57044e85a",
      userId: "fc1f4e85-8e83-4a38-ab1e-8e4da2c6dd25",
      comment: "God bless the student union",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: "330547ae-d310-4b4b-a70e-a11eb9dde8f9",
      postId: "7cc6de97-2ed6-4422-9ce2-9ff22cc5e97a",
      userId: "98e0350f-ed09-46b0-83d7-8a135afeaf84",
      comment: "wahala be like bicycle",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: "6cbaa746-6e42-453e-91f4-c0de15fb4b95",
      postId: "6cbaa746-6e42-453e-91f4-c0de15fb4b9f",
      userId: "57af7c29-efb2-434e-9fce-b87c77447aaa",
      comment: "This life no trust anybody",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ,], 
    {});
  },

  down: async (queryInterface, Sequelize) => {

  },
};
