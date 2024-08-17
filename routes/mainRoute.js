const { Router } = require(`express`);
const routGet = require("./get_routes");
const routPost = require("./create_rout");


const main_rotuer = Router();

main_rotuer.use(routGet);
main_rotuer.use(routPost)

// export
module.exports = main_rotuer;
