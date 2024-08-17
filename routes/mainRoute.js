const { Router } = require(`express`);
const routRead = require("./read_routes");
const routCreat = require("./create_rout");


const main_rotuer = Router();

main_rotuer.use(routRead);
main_rotuer.use(routCreat)

// export
module.exports = main_rotuer;
