const { Router } = require(`express`);
const { create_category } = require("../controller/create");
 
const routPost = Router()

routPost.post("/category/creat", create_category)


module.exports = routPost