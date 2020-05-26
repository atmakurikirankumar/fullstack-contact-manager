const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

// Logging request basic info
app.use(morgan("dev"));

// create DB Connection
connectDB();

// Parse Request Body
app.use(express.json({ extended: false }));

// Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

app.listen(PORT, () => console.log(`Server started running on ${PORT}`));
