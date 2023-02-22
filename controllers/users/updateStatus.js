const bcrypt = require("bcryptjs");
const { User } = require("../../models");
const createError = require("http-errors");


const updateStatus = async (req, res, next) => {
  try {
        const {_id} = req.user;
        const { email, password, subscription } = req.body;
        const user = await User.findOne({email});
        const passwCompare = bcrypt.compareSync(password, user.password);

        if(!user || !passwCompare){
            throw createError(401, `Email or password is wrong`);

        }

        await User.findByIdAndUpdate(_id, {subscription: subscription});

        res.status(200).json({
            "user": {  
              "email": email,
              "subscription": subscription
            }
          })
       
   
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatus;
