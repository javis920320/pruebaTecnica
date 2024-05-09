const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())

app.use("/api/pacientes",require("./routes/pacientesRouter"));

app.get("/", (req, res) => {});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
