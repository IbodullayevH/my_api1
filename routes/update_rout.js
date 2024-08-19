const { Router } = require(`express`);
const { updateCategory } = require("../controller/update");

const routUpdate = Router();

routUpdate.patch("/categorys/update", updateCategory);

module.exports = routUpdate;
