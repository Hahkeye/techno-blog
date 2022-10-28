const seedComments = require('./comments-seed');
const seedPosts = require('./posts-seed');
const seedUsers = require('./users-seeds');


const sequelize = require('../config/connect');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("users---------------------");
  await seedUsers();
  console.log("posts-----------------------------");
  await seedPosts();
  console.log("comments-------------------------------------");
  await seedComments();

  
  process.exit(0);
};

seedAll();
