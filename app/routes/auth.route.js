const express = require('express');
const controller = require('../controllers');
const router = express.Router({ mergeParams: true });

router.route('/login')
    .post(controller.authController.login);

router.route('/token')
    .post(controller.authController.token);

router.route('/logout/:token')
    .delete(controller.authController.logout);

module.exports = router;