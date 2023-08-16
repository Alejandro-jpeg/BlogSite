const router = require('express').Router();

const postRoutes = require('./postRoutes');
const loginRoute = require('./loginRoute');
const signupRoute = require('./signupRoute');
const commentRoutes = require('./commentRoutes');

router.use('/posts', postRoutes);
router.use('/login', loginRoute);
router.use('/signup', signupRoute);
router.use('/comments', commentRoutes);

module.exports = router;