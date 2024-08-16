const { Router } = require(`express`);
const {
  getCategory,
  getPhones,
  getCategoryById,
  getCategoryByname,
  getPhoneById,
  getPhoneByname,
} = require("../controller/read");

const routGet = Router();

routGet.get("/categorys", getCategory);
routGet.get("/categorys/id/:id", getCategoryById);
routGet.get("/categorys/name/:name", getCategoryByname);
routGet.get("/phones", getPhones);
routGet.get("/phones/id/:id", getPhoneById);
routGet.get("/phones/name/:name", getPhoneByname);

// export routes
module.exports = {
  routGet,
};
