const { Contact } = require('../../models')


const getAll = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const {page , limit, favorite} = req.query;
    const skip = (page - 1) * limit;

    if (favorite){
      const data = await Contact.find({ favorite: { $eq: true } });

      res.status(200).json(data)
      return
    }

    const data = await Contact.find({owner: _id}, '', {skip: skip, limit: Number(limit)}).populate('owner', '_id email');
    res.status(200).json(data)
    
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
