const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongoose = require("mongoose");

const connectDB = async (_, res) => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(`Database connection failed, Error: ${error.message}`);
        process.exit(1)
    }
};

module.exports = connectDB;