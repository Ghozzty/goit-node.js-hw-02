const express = require("express");

const router = express.Router();

const { validation, auth } = require('../../middlewares')

const { joiSchema } = require("../../models/user");

const { signup: ctrls } = require("../../controllers");


router.post('/signup',validation(joiSchema), ctrls.register);

router.post('/login', validation(joiSchema), ctrls.login);

router.get('/logout', auth, ctrls.logout);



module.exports = router;
