const contactsOperations = require("../../models/contacts");
const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const updateCont = async (req, res, next) => {
  try {
    // validate
    const { error } = contactSchema.validate(req.body);
    if (error) {
      error.status = 400;
      error.message = { message: "missing fields" };
      throw error;
    }
    // put
    const { contactId } = req.params;

    const updatedContact = await contactsOperations.updateContact(
      contactId,
      req.body
    );
    // if null
    if (!updatedContact) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Not Found",
      });
      return;
    }
    // res
    res.json({
      status: "success",
      code: 200,
      data: {
        updatedContact,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateCont;
