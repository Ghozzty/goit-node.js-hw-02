const contactsOperations = require("../../models/contacts");

const updateCont = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const updatedContact = await contactsOperations.updateContact(
      contactId,
      req.body
    );
    // if null
    if (!updatedContact) {
      res.status(404).json({ message: "Not Found" });

      return;
    }
    // res
    res.status(200).json(updatedContact);
  } catch (error) {
    next(error);
  }
};

module.exports = updateCont;
