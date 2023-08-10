const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({where: {email: req.body.email } });
        if (!userData) {
            res.status(400).json({message: 'Incorrect Login Information, please try again'});
            return;
        }

        const userPass = await.userData.checkPassword(req.body.password);
        if (!userPass) {
            res.status(400).json({message: 'Incorrect Login Information, please try again'});
            return;
        }

        req.session.save(( )=> {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Succesfully logged in'});
        })
    } catch (err) {
        res.status(400).json(err);
    }
});