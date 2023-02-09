const getAll = require("./allCont");
const getById = require("./getById");
const addCont = require("./addCont");
const delCont = require("./delCont");
const updateCont = require("./updateCont");
const updateFavorite = require('./updateFavorite')

module.exports = {
  getAll,
  getById,
  addCont,
  delCont,
  updateFavorite,
  updateCont,
};
