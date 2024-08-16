let { Pool } = require(`pg`);
require(`dotenv`).config()

const DATABASE_URL = process.env.DATABASE_URL
let pool = new Pool({
  connectionString: DATABASE_URL,
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
