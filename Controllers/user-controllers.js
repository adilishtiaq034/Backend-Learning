function home(req, res) {

    res.json({
        message: "Home"
    });

}

function login(req, res) {
    res.json({
        message: "Login"
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