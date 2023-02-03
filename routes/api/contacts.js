const express = require("express");

const router = express.Router();

const {
  validateUpdateContact,
  validationNewCont,
} = require("../../middlewares");

const { contactSchema } = require("../../shemas");

const { contacts: ctrls } = require("../../controllers");

router.get("/", ctrls.getAll);

router.get("/:contactId", ctrls.getById);

router.post("/", validationNewCont(contactSchema), ctrls.addCont);

router.delete("/:contactId", ctrls.delCont);

router.put(
  "/:contactId",
  validateUpdateContact(contactSchema),
  ctrls.updateCont
);

module.exports = router;
