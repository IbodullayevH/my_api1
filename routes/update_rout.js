const { Router } = require(`express`);
const { updateCategory, updatePhone } = require("../controller/update");

const routUpdate = Router();

routUpdate.patch("/categorys/update/:id", updateCategory);
routUpdate.patch("/phones/update/:id", updatePhone);

module.exports = routUpdate;
