const { Router } = require(`express`);
const {
  getCategory,
  getPhones,
  getCategoryById,
  getCategoryByname,
  getPhoneById,
  getPhoneByname,
} = require("../controller/read");

const routRead = Router();

routRead.get("/categorys", getCategory);
routRead.get("/categorys/id/:id", getCategoryById);
routRead.get("/categorys/name/:name", getCategoryByname);
routRead.get("/phones", getPhones);
routRead.get("/phones/id/:id", getPhoneById);
routRead.get("/phones/name/:name", getPhoneByname);

// export routes
module.exports = routRead
