const router = require('express').Router();
const {User, Post, Comment} = require('../../models'); 

//UNA RUTA CON EL ID DE UN POST PARA DESPLEGAR ESE POST Y TODOS SUS COMMENTS
//RENDER THE POST PAGE WHERE THE POST ID MATCHES THE QUERY PARAMS
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

module.exports = router;