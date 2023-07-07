const { Post } = require('../models');

const postData = [
    {
        title: 'My opinion on computers',
        content: 'What can i say about computers? I love them <3',
        user_id: 3,
    },
    {
        title: 'Abandoning social media',
        content: 'I am no longer going to be part of social media, I will be starting my own personal website, if you would like to keep in touch join my webring',
        user_id: 1,
    },
    {
        title: 'Creating my first post',
        content: 'I am just trying to test this site, see if i like it :P',
        user_id: 2,
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;