// Import the Express package
const express = require("express");

// Create a new Router object
const router = express.Router();

// Base route: GET /users
router.get("/", (req, res) => {
    res.json({
        message: "Home"
    });
});

// Login route: GET /users/login
router.get("/login", (req, res) => {
    res.json({
        message: "Login"
    });
});

// Dashboard route: GET /users/dashboard
router.get("/dashboard", (req, res) => {
    res.json({
        message: "Dashboard"
    });
});

// Export the router so app.js can use it
module.exports = router;