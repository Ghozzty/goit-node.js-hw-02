const validateUpdateContact = (shema) => {
  return (req, res, next) => {
    const { error } = shema.validate(req.body);

    if (error) {
      res.status(400).json({ message: "missing fields" });
      next(error);
    }
    next();
  };
};

module.exports = validateUpdateContact;
