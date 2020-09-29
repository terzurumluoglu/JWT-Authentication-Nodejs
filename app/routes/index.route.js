const express = require('express');

const authRoute = require('./auth.route');
const postRoute = require('./posts.route');

const controller = require('../controllers');
const authorize = require('../middleware/authorize/authorize');

const router = express.Router();


router.get('/', controller.helloController.hello);

router.use('/auth', authRoute);

router.use('/posts', authorize.authorize, postRoute);

router.use('/users', authorize.authorize, postRoute);

module.exports = router;