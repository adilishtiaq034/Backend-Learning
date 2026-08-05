// We are going to create a controller for our user routes.
//  This controller will handle the logic for the user routes.
// so for every route we will create functions in the controller 
// and then we will use those functions in our routes file.
// for user routes we will create a file called userController.js in the controllers folder.
// for other routes we will create other controllers in the controllers folder.

function home(req, res) {

    res.json({
        message: "Home Page"
    });

}

function login(req, res) {
    res.json({
        message: "Login Page"
    });
}

function dashboard(req, res) {
    res.json({
        message: "Dashboard"
    });
}

 module.exports = {
    home,
    login,
    dashboard
};