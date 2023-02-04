const validationNewCont = (shema) => {
  return (req, res, next) => {
    const { error } = shema.validate(req.body);

    if (error) {
      res.status(400).json({ message: "missing required name field" });
      next(error);
    }
    next();
  };
};

module.exports = validationNewCont;
