const express = require("express");
const morgan = require("morgan");
const app = express();
const noteRoutes = require("./routes/post.route");

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", noteRoutes)

app.get("/", (req, res) => {
    res.send("Server is up");
});

module.exports = app;