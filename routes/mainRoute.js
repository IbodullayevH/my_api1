const { Router } = require(`express`);
const routRead = require("./read_routes");
const routCreat = require("./create_rout");
const routUpdate = require("./update_rout");

const main_rotuer = Router();

main_rotuer.use(routRead);
main_rotuer.use(routCreat);
main_rotuer.use(routUpdate);

// export
module.exports = main_rotuer;
