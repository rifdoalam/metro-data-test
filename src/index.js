const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const dotenv = require("dotenv");
dotenv.config();

const employeeRoutes = require("./routes/employeeRoutes.js");
const profileRoutes = require("./routes/profileRoutes.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/v1/employee", employeeRoutes);
app.use("/api/v1/profile", profileRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
