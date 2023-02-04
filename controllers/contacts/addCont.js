const contactsOperations = require("../../models/contacts");

const addCont = async (req, res, next) => {
  try {
    const newContact = await contactsOperations.addContact(req.body);

    res.status(201).json(newContact);
  } catch (error) {
    error.message = "missing required name field";
    next(error);
  }
};

module.exports = addCont;
