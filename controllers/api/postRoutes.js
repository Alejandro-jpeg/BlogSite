const router = require('express').Router();
const {User, Post, Comment} = require('../../models'); 
const withAuth = require('../../utils/auth');

router.get('/:id', async(req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id,{
            include: [
                {
                    model: Comment,
                    attributes:['content', 'user_id'],
                    include: User,
                },
                User,
            ],
        });
        const posts = postData.get({plain:true});
        res.render("postMain", { ... posts });
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Internal server error'});
    }
});

//creating a new post
router.post('/', withAuth, async (req, res) => {
try {
    const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id
    });
    res.status(200).json(newPost)
} catch (err) {
    res.status(404).json(err);
}
});

module.exports = router;