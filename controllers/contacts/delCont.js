const contactsOperations = require("../../models/contacts");

const delCont = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const delContact = await contactsOperations.removeContact(contactId);
    if (!delContact) {
      res.status(404).json({
        stasus: "error",
        code: 404,
        message: "Not Found",
      });
      return;
    }

    res.status(200).json({
      status: "success",
      code: 200,
      message: "contact deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = delCont;
