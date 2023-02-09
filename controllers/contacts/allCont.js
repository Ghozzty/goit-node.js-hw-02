const { Contact } = require('../../models')


const getAll = async (req, res, next) => {
  try {
    const data = await Contact.find({});
    res.status(200).json(data)
    
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
