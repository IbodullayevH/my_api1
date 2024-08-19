const fetch_data = require("../utils/postgres_logic");

// update category
const updateCategory = async (req, res) => {
  try {
    let { name } = req.body;
    let { id } = req.params;

    const check_id = await fetch_data(
      "SELECT * FROM categorys WHERE id = $1",
      id
    );

    if (check_id.length == 0) {
      return res.status(404).send({
        success: false,
        message: "Not Found categories",
      });
    }

    await fetch_data("UPDATE categorys SET name = $1 WHERE id = $2", name, id);
    let updated_categories = await fetch_data(
      "SELECT * FROM categorys WHERE id = $1",
      id
    );
    res.status(200).send({
      success: true,
      message: "Updated successfully",
      data_updated: updated_categories,
    });
  } catch (error) {
    res.status(401).send({
      success: false,
      message: error.message,
    });
  }
};

// update phone
const updatePhone = async (req, res) => {
  try {
    let { name, price, descripton, category_id } = req.body;
    let { id } = req.params;

    const check_id = await fetch_data("SELECT * FROM phones WHERE id = $1", id);

    if (check_id.length == 0) {
      return res.status(404).send({
        success: false,
        message: "Not Found Phone",
      });
    }

    await fetch_data(
      "UPDATE phones SET name = $1, price = $2, descripton = $3, category_id = $4 WHERE id = $5",
      name,
      price,
      descripton,
      category_id,
      id
    );

    let updated_phone = await fetch_data(
      "SELECT * FROM phones WHERE id = $1",
      id
    );
    res.status(200).send({
      success: true,
      message: "Updated successfully",
      data_updated: updated_phone,
    });
  } catch (error) {
    res.status(401).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  updateCategory,
  updatePhone
};
