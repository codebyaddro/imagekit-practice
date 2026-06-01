const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const noteRoutes = require("./routes/post.route");
const userRoutes = require("./routes/user.route");

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/v1/posts", noteRoutes);
app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Server is up");
});

module.exports = app;