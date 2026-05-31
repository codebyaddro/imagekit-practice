require("dotenv").config();

const app = require("./app");
const http = require("http");
const connectDB = require("./configs/db.config");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
connectDB();

server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});