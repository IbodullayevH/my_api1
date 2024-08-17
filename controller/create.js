const fetch_data = require("../utils/postgres_logic");

// create ctegory
const create_category = async (req, res) => {
  try {
    let { name } = req.body;

    // name required
    if (name == "" || name.charCodeAt(32)) {
      return res.status(403).send({
        success: false,
        message: "field required",
      });
    }

    // exist category
    let [existName] = await fetch_data(
      "SELECT * FROM categorys name = $1",
      name
    );
    if (existName) {
      return res.status(403).send({
        success: false,
        message: "Already existing name",
      });
    }

    // create
    await fetch_data("INSERT INTO categorys(name) VALUES($1)", name);

    let dataNewCategory = await fetch_data("SELECT * FROM categorys");
    res.status(201).send({
      success: true,
      message: "Created new category",
      data: dataNewCategory.at(-1),
    });
  } catch (error) {
    res.status(401).send({
      success: false,
      message: "Failed to create category",
    });
  }
};



module.exports = {
    create_category
}