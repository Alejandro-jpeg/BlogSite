const seedUser = require('./userSeeds');
const seedPost = require('./postSeeds');
const seedComment = require('./commentSeeds');

const sequelize = require('../config/connection');

const seeding = async() => {
    await sequelize.sync({ force:true });
    console.log('---DATABASE SYNCED---');
    await seedUser();
    console.log('---USERS SEEDED---');
    await seedPost();
    console.log('---POSTS SEEDED---');
    await seedComment();
    console.log('---COMMENTS SEEDED---');
    process.exit(0);
};

seeding();