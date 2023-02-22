const { User } = require('../models');
const createError = require("http-errors");
const jwt = require('jsonwebtoken');


const auth = async(req, res, next) => {
 
    try {
        const {SECRET_KEY} = process.env;

        const {authorization = ""} = req.headers;
        const [bearer, token] = authorization.split(' ');
        
        if(bearer !== 'Bearer'){
          throw createError(401, `Not authorized`);
        }
        // 
        const {id} = jwt.verify(token, SECRET_KEY);

        const user = await User.findById(id);
        if(!user || !user.token){
          throw createError(401, `Not authorized`);
        }

        req.user = user;
        next();

    } catch (error) {
        error.message = `Not authorized`;
        error.status = 401;
        next(error)
    }
    // 

}

module.exports = auth;