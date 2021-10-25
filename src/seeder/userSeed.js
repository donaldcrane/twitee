const bcrypt = require("bcrypt");

const password = "password12";
const hash = bcrypt.hashSync(password, 10);

const User = {
  model: "user",
  documents: [
    {
      _id: "61158ca353348223283d0d16",
      name: "Paul Buhari",
      email: "paulbuhari@gmail.com",
      password: hash,
      user_type: "store_owner",
      active: true,
      phone: 2347035468886,
      profilePhoto: "http://gp.com",
      account_number: "2070133799",
      account_name: "Abas Paul",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: "60382dd567c98d15dc9c8fc8",
      name: "Peter Alabi",
      email: "peter@gmail.com",
      password: hash,
      user_type: "store_owner",
      active: true,
      phone: 23415232555,
      profilePhoto: "http://gp.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: "60382dd576c98d15dc9c8fb5",
      name: "Paul Alabi",
      email: "paul@gmail.com",
      password: hash,
      user_type: "store_owner",
      active: false,
      phone: 23415111545,
      profilePhoto: "http://gp.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: "60382dd567c98d15dc9c8fb4",
      name: "Friday Akin",
      email: "fridayakin@gmail.com",
      password: hash,
      active: true,
      user_type: "customer",
      phone: 2314563635566,
      profilePhoto: "http://gp.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      _id: "60382dd567c98d15dc9c8fc5",
      name: "Simeon Kamsi",
      email: "simeonkamsi@gmail.com",
      password: hash,
      user_type: "admin",
      active: true,
      phone: 2314563635566,
      profilePhoto: "http://gp.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
};

module.exports = User;
