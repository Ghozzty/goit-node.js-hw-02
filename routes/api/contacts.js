const express = require("express");

const router = express.Router();

const { contacts: ctrls } = require("../../controllers");

router.get("/", ctrls.getAll);

router.get("/:contactId", ctrls.getById);

router.post("/", ctrls.addCont);

router.delete("/:contactId", ctrls.delCont);

router.put("/:contactId", ctrls.updateCont);

module.exports = router;
