const express = require("express");

const router = express.Router();

const { auth } = require('../../middlewares')

const { users: ctrls } = require("../../controllers");



router.get('/current', auth,  ctrls.getCurrent);

router.patch('/', auth,  ctrls.updateStatus)



module.exports = router;
