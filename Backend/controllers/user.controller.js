const User = require("../models/user.model");

const register = async (req, res) => {
    try {

        const { username, email, password } = req.body;

        const newUser = new User({
            username, email, password
        });
        await newUser.save();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            post: newUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User creation falied",
            error: error.message
        })
    }
};

module.exports = { register };