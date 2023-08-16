const router = require('express').Router();
const { Users } = require('../../models');

router.get('/', async (req, res) => {

    res.render('signup');
});

// SIGNUP 
router.post('/', async (req, res) => {
    console.log("req: ",  req.body)

    try {
      const dbUserData = await Users.create({
        userName: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });


      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userName = dbUserData.dataValues.userName;
        req.session.userId = dbUserData.dataValues.id;
        res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

module.exports = router; 