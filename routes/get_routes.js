const { Router } = require(`express`);
const { getCategory, getPhones, getCategoryById, getCategoryByname } = require("../controller/read");

const routGet = Router();

routGet.get("/categorys", getCategory);
routGet.get("/categorys/id/:id", getCategoryById);
routGet.get("/categorys/name/:name", getCategoryByname);
routGet.get("/phones", getPhones)

// export routes
module.exports = {
  routGet,
};
