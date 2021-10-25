const seeder = require("mongoose-seed");
const userSeed = require("./userSeed");
const postSeed = require("./postSeed");
const config = require("../config/index");

// Data array containing seed data - documents organized by Model
const data = [userSeed, postSeed];
seeder.connect(config.DATABASE_URL, () => {
  // load models
  seeder.loadModels(["./src/models/user.js", "./src/models/post.js"]);
  //   clear database
  seeder.clearModels(["user", "post"], () => {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, (err, done) => {
      if (err) {
        console.log(err);
        return err;
      }
      if (done) {
        console.log("seeding done");
      }
      seeder.disconnect();
    });
  });
});
