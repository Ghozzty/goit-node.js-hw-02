const { Contact } = require('../../models')

const updateCont = async (req, res, next) => {
  try {
    const { contactId } = req.params;

    const updatedContact = await Contact.findByIdAndUpdate(
      contactId,
      req.body,
      {new: true}
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
