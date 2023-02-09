const express = require("express");

const router = express.Router();

const { validation } = require('../../middlewares')

const { contactSchemaJoi, favoriteSchemaJoi } = require("../../models");

const { contacts: ctrls } = require("../../controllers");

router.get("/", ctrls.getAll);

router.get("/:contactId", ctrls.getById);

router.post("/", validation(contactSchemaJoi), ctrls.addCont);

router.delete("/:contactId", ctrls.delCont);

router.put( "/:contactId", validation(contactSchemaJoi), ctrls.updateCont);

router.patch( "/:contactId/favorite", validation(favoriteSchemaJoi), ctrls.updateFavorite);



module.exports = router;
