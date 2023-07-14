const router = require('express').Router(); 
const { User, Post, Comment } = require('../models');


router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
        const posts = postData.map((post) =>post.get({ plain:true }));
        res.render("homepage", { posts });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error"});
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        res.render("dashboard");
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error"});
    }
});

router.get('/signup', async (req, res) => {
    try {
        res.render("signup");
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error"});
    }
});


router.get('/login', async (req, res) => {
    try {
        res.render("login");
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error"});
    }
});

module.exports = router;