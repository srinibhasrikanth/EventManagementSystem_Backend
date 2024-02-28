const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
const cors = require("cors");

//dotenv config
dotenv.config();

//rest app
const app = express();

//database config
connectDB();

//middlewares
app.use(cors());
app.use(morgan());
app.use(express.json());

//routes
app.use("/api/v1/auth", require("./routes/authRoutes.js"));
app.use("/api/v1/members", require("./routes/volunteerRoutes.js"));
app.use("/api/v1/events", require("./routes/eventRoutes.js"));
app.use("/api/v1/work", require("./routes/workRoutes.js"));
app.use("/api/v1/acmmembers", require("./routes/memberRoutes.js"));

//PORT number
const PORT = 8000;

//Listening the PORT
app.listen(PORT, () => {
  console.log(`Server is running`);
});
