const fetch_data = require("../utils/postgres_logic");

// get category
const getCategory = async (req, res) => {
  try {
    let dataCategory = await fetch_data("SELECT * FROM categorys");
 
    res.status(200).send({
      success: true,
      message: "Data Get",
      data: dataCategory,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message,
    });
  }
};



// get category by id
const getCategoryById = async (req, res) => {
  try {
    let { id } = req.params;

    let check_db_by_id = await fetch_data(
      "SELECT * FROM categorys WHERE id = $1",
      id
    );
    if (!check_db_by_id || check_db_by_id.length == 0) {
      return res.status(404).send({
        success: false,
        message: "Not available id",
      });
    }
    res.status(200).send({
      success: true,
      message: "Data Get",
      data: check_db_by_id,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message,
    });
  }
};



// get category by name
const getCategoryByname = async (req, res) => {
  try {
    let { name } = req.params;

    let check_db_by_name = await fetch_data(
      "SELECT * FROM categorys WHERE name = $1",
      name
    );
    if (!check_db_by_name || check_db_by_name.length == 0) {
      return res.status(404).send({
        success: false,
        message: "Not available name",
      });
    }

    res.status(200).send({
      success: true,
      message: "Data Get",
      data: check_db_by_name,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message,
    });
  }
};



// get phones
const getPhones = async (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "Data Get",
      data: await fetch_data("SELECT * FROM phones"),
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message,
    });
  }
};

// exports
module.exports = {
  getCategory,
  getCategoryById,
  getCategoryByname,
  getPhones,
};
