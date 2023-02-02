const contactsOperations = require("../../models/contacts");
const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const addCont = async (req, res, next) => {
  try {
    // validate
    const { error } = contactSchema.validate(req.body);
    if (error) {
      error.status = 400;
      error.message = { message: "missing required name field" };
      throw error;
    }
    // new Cont
    const newContact = await contactsOperations.addContact(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: { newContact },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addCont;
