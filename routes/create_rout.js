const { Router } = require(`express`);
const { create_category, create_phone } = require("../controller/create");
 
const routPost = Router()

routPost.post("/category/creat", create_category)
routPost.post("/phone/creat", create_phone)


module.exports = routPost