const { Comment } = require('../models');

const commentData = [
    {
        content:'I also really love computers, please elaborate',
        user_id: 2,
        post_id: 1,
    },
    {
        content:'How are we supposed to reach you with no contact info? :P',
        user_id: 3,
        post_id: 2,
    },
    {
        content:'Hope you enjoy your stay C;',
        user_id: 1,
        post_id: 3,
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;