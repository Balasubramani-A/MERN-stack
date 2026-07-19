const userModel = require("../models/user.model");
const authRouter = require("../routes/auth.routes");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */

async function registerUserController(req, res) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    try {
        const existingUser = await userModel.findOne({
            $or: [{ username }, { email }]
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Hash password
        const hash = await bcrypt.hash(password, 10);

        // Create user
        const user = await userModel.create({
            username,
            email,
            password: hash
        });

        // Generate token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.cookie("token", token);

        return res.status(201).json({
            message: "User registered successfully",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}


/**
 * @name loginUserController
 * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 */

async function loginUserController(req, res) {
    const { email, password } = req.body;   

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Create JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.cookie("token", token); // 1 day

        res.status(200).json({ message: "User logged in successfully", token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    registerUserController,
    loginUserController
};