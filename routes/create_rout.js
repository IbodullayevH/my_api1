const { Router } = require(`express`);
const { create_category, create_phone } = require("../controller/create");
 
const routCreat = Router()

routCreat.post("/category/creat", create_category)
routCreat.post("/phone/creat", create_phone)


module.exports = routCreat