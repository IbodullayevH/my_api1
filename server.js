require("dotenv").config();
const express = require(`express`);
const app = express();
const cors = require(`cors`);
const main_rotuer = require("./routes/mainRoute");
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(main_rotuer);

app.listen(port, () => {
  console.log(`${port} - started`);
});
