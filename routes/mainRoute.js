const { Router } = require(`express`);
const { routGet } = require("./get_routes");

const main_rotuer = Router();

main_rotuer.use(routGet);

module.exports = main_rotuer;
