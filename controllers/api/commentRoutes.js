const router = require('express').Router();
const { User, Post, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

// Get all comments
router.get('/', async (req, res) => { 
    try {
        const commentData = await Comment.findAll({
            include: [{
                model: User,
            }],
        });
        
        const comments = commentData.map(comment => comment.toJSON());
        res.status(200).render('/', { comments });
    } catch (err) {
        res.status(500).json(err);
    }
});

// create new comment
router.post('/', withAuth, async (req, res) => {

    try {
        const newComment = await Comment.create({
        
            ...req.body,
            comment: req.body.comment,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
            
        });
        console.log(newComment);
        res.status(200).json(newComment);
        } catch (err) {
        console.log(err);
        res.status(400).json(err);
        }
});

module.exports = router;