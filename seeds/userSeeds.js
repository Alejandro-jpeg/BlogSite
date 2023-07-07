const { User } = require('../models');

const UserData = [
    {
        userName: 'LizZzy',
        email: 'Lizzzy@hotmail.com',
        password: '12345678',
    },
    {
        userName: 'Ara',
        email: 'aaCha@hotmail.com',
        password: '87654321',
    },
    {
        userName: 'Programanda',
        email: 'programanda@hotmail.com',
        password: '012345678',
    },
];

const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;