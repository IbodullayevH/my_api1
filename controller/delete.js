const fetch_data = require("../utils/postgres_logic");

// delete categorie
const delete_categorie = async(req, res) => {
    try {
        let {id} = req.params
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

          await fetch_data("DELETE FROM categorys WEHRE id = $1", id)

          res.status(200).send({
            success:true,
            message: "Deleted Categories"
          })
    } catch (error) {
        res.status(403).send({
            success: false,
            message: error.message,
          });
    }
}


// delete phone
const delete_phone = async(req, res) => {
    try {
        let {id} = req.params
        const check_id = await fetch_data(
            "SELECT * FROM phones WHERE id = $1",
            id
          );
      
          if (check_id.length == 0) {
            return res.status(404).send({
              success: false,
              message: "Not Found phone",
            });
          }

          await fetch_data("DELETE FROM phones WEHRE id = $1", id)

          res.status(200).send({
            success:true,
            message: "Deleted Phone"
          })
    } catch (error) {
        res.status(403).send({
            success: false,
            message: error.message,
          });
    }
}

// exports
module.exports = {
    delete_categorie,
    delete_phone
}
