const { Router } = require(`express`);
const { delete_categorie, delete_phone } = require("../controller/delete");
 
const routDelete = Router()

routDelete.delete("/categorys/delete/:id", delete_categorie)
routDelete.delete("/phones/delete/:id", delete_phone)


module.exports = routDelete