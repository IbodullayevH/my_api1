let { Pool } = require(`pg`);

let pool = new Pool({
  connectionString: "postgres://postgres:8077@localhost:5432/api1",
});

// fetch_data logic
const fetch_data = async (query, ...params) => {
  let client = await pool.connect();

  try {
    let { rows } = await client.query(query, params.length ? params : null);
    return rows;
  } catch (error) {
    console.error("Fetch_Data ", error);
  } finally {
    client.release();
  }
};

// export
module.exports = fetch_data;
