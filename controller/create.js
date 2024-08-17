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
      "SELECT * FROM categorys WHERE name = $1",
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

// create phone
const create_phone = async (req, res) => {
  try {
    let { name, price, descripton, category_id } = req.body;

    // exist category
    let [existName] = await fetch_data(
      "SELECT * FROM phones WHERE name = $1",
      name
    );
    if (existName) {
      return res.status(403).send({
        success: false,
        message: "Already existing phone",
      });
    }

    //  required
    if (
      name == "" ||
      name.charCodeAt(32) ||
      descripton == "" ||
      typeof price == "string" ||
      typeof category_id == "string"
    ) {
      return res.status(403).send({
        success: false,
        message: "a field is required or an invalid input value ",
      });
    }

    // create
    await fetch_data(
      "INSERT INTO phones(name, price, descripton, category_id) VALUES($1, $2, $3, $4)",
      name,
      price,
      descripton,
      category_id
    );

    let dataNewPhone = await fetch_data("SELECT * FROM phones");
    res.status(201).send({
      success: true,
      message: "Created new Phone",
      data: dataNewPhone.at(-1),
    });
  } catch (error) {
    res.status(401).send({
      success: false,
      message: `Failed to create phone: ${error.message}`,
    });
  }
};

module.exports = {
  create_category,
  create_phone,
};
