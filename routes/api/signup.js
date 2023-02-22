const express = require("express");

const router = express.Router();

const { validation, auth } = require('../../middlewares')

const { loginJoiSchema, regJoiSchema } = require("../../models/user");

const { signup: ctrls } = require("../../controllers");


router.post('/signup',validation(regJoiSchema), ctrls.register);

router.post('/login', validation(loginJoiSchema), ctrls.login);

router.get('/logout', auth, ctrls.logout);



module.exports = router;
