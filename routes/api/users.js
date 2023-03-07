const express = require("express");

const router = express.Router();

const { auth, upload, validation } = require('../../middlewares')

const { users: ctrls } = require("../../controllers");

const { resendingSchemaJoi } = require("../../models");


router.get('/current', auth,  ctrls.getCurrent);

router.get('/verify/:verificationToken', ctrls.verifyEmail)

router.post('/verify', validation(resendingSchemaJoi),  ctrls.resendingEmail);

router.patch('/', auth,  ctrls.updateStatus);

router.patch('/avatars', auth, upload.single("avatar"), ctrls.updateAvatar)



module.exports = router;
