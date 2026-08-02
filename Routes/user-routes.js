// Import the Express package
// const express = require("express");


// Create a new Router object
// const router = express.Router();

// Base route: GET /users
// router.get("/", (req, res) => {
//     res.json({
//         message: "Home"
//     });
// });

// Login route: GET /users/login
// router.get("/login", (req, res) => {
//     res.json({
//         message: "Login"
//     });
// });

// Dashboard route: GET /users/dashboard
// router.get("/dashboard", (req, res) => {
//     res.json({
//         message: "Dashboard"
//     });
// });

// Export the router so app.js can use it
// module.exports = router;

//----------------------------------------------------------

// Import the controller functions from userController.js

const { home , login , dashboard } = require("../controllers/userController");

// now we can use the controller functions in our routes

router.get("/", home);
router.get("/login", login)
router.get("/dashboard", dashboard);

// Those controller functions will handle the logic for each route,
//  keeping our routes file clean and organized.























