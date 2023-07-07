const router = require('express').Router();


router.get('/', async (req, res) => {
    try {
        res.render("homepage");
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