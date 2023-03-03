const express = require("express");

const router = express.Router();

const { auth, upload } = require('../../middlewares')

const { users: ctrls } = require("../../controllers");



router.get('/current', auth,  ctrls.getCurrent);

router.patch('/', auth,  ctrls.updateStatus);

router.patch('/avatars', auth, upload.single("avatar"), ctrls.updateAvatar)



module.exports = router;
