const express = require("express");

const router = express.Router();

const { validation, auth } = require('../../middlewares')

const { contactSchemaJoi, favoriteSchemaJoi } = require("../../models");

const { contacts: ctrls } = require("../../controllers");

router.get("/", auth, ctrls.getAll);

router.get("/:contactId", ctrls.getById);

router.post("/", auth, validation(contactSchemaJoi), ctrls.addCont);

router.delete("/:contactId", ctrls.delCont);

router.put( "/:contactId", validation(contactSchemaJoi), ctrls.updateCont);

router.patch( "/:contactId/favorite", validation(favoriteSchemaJoi), ctrls.updateFavorite);



module.exports = router;
