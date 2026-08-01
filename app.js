const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())  // middleware to parse JSON data in request body & it runs before routing

// Routing in express

// app.get("/", (req,res)=>{
//     res.send("Hello this is home page")
// })

// app.get("/about", (req,res)=>{
//     res.send("Hello this is about page")
// })

// app.get("/contact", (req,res)=>{
//     res.send("Hello this is contact page")
// })

// routes paramters 

// app.get("/products/:productid", (req, res)=>{
//      const id = req.params.productid;
//     res.send(`Hello this is Product ${id} page`)
//  })

// query paramters are used for filtering the data

// app.get("/search", (req, res)=>{
//      console.log(req.query);
//      res.send("Hello this is search page")

// }

// )

//  app.get("/search", (req, res)=>{
//      const name = req.query.name;
//      const city = req.query.city;
//      res.send(`Hello ${name} from ${city}`)

// --------------------------------------------------
//---------------------------------------------------

//             Day 2

// The browser is also a client. The browser's address bar only sends GET requests,
//  so during backend development we use Postman to manually send
//  GET, POST, PUT, DELETE, and other HTTP requests without needing a frontend.

// get usually used to navigate to different pages 
// and post is used to send data to backend server
// post means express will send data to backend server




  
// Learning Post request in express
                                               
// app.post("/register" , (req,res)=>{             
//     res.json({
//         message: "Hello login successfull"}
//     )
// console.log(req.body.name);                     // req.body contains all the data send by user
// console.log(req.body.email);   
// console.log(req.body.password);
// })

//------------------------------------------------------------

// Learning status in express

// 200 -> (everything worked successfully)

//  app.post("/login", (req, res) => {
//     res.status(200).json({
//         message: "Login Successful"
//     });
// });

//------------------------------------------------------------

// 201 -> (something new created like new account)

// app.post("/login", (req, res) => {
//     res.status(201).json({
//         message: "Account Created Successfully"
//     });
// });

//------------------------------------------------------------

// 400 -> Bad Request means Client sent invalid or incomplete data
// like forget email or password or any other required field

// app.post("/login", (req, res) => {
//     res.status(400).json({
//         message: "Both email and password are required"
//     });
// });

//------------------------------------------------------------

// 401 -> Unauthorized means the user is not authorized to access the requested resource
// means user is trying to login into another account without knowing password

// res.status(401).json({
//     message: "Please login first"
// });

//------------------------------------------------------------

// 404 -> means the requested resource is not found on the server

// app.use((req, res) => {
//     res.status(404).json({
//         message: "Page Not Found"
//     });
// });

//------------------------------------------------------------

// 500 -> The server made a mistake.

// res.status(500).json({
//     message: "Internal Server Error"
// });

//------------------------------------------------------------

// Learning middleware in express

// Middleware is a function that runs before the route handler
// and can modify the request and response objects.
// Middleware can be used for authentication, logging, error handling, etc.

// function logger(req, res, next) {
//     console.log("A request was received.");
//     next();
// }

// app.use(logger);

// app.get("/", (req, res) => {
//     res.json({
//         message: "Home Page"
//     });
// });

//----------------------------------------------------------------

// Next  → It means  perform this and continue to the next middleware/route.

// This example shows how to use multiple middleware functions in Express.
//  Each middleware function logs a message and then calls next() to pass
//  control to the next middleware function in the stack.


// function middleware1(req, res, next) {
//     console.log("Middleware 1");
//     next();
// }

// function middleware2(req, res, next) {
//     console.log("Middleware 2");
//     next();
// }

// app.use(middleware1);
// app.use(middleware2);

// app.get("/", (req, res) => {
//     res.json({
//         message: "Successful"
//     });
// });
// request will end when the response is sent back to client 
// like res.send() or res.json() or res.end() 
// and after that no middleware will be executed

// The output of the above code will be
//   middleware1 
//   middleware2 

//-------------------------------------------------------------

/* 
                    app.use(logger);  // Logger is a middlware function 

                    app.get("/", ...)

                    app.post("/login", ...)

                    app.get("/about", ...)

                    Now every request goes through logger first.
                    because it is written at top of routes                */

//--------------------------------------------------------------------------------


//                        function logger(req, res, next) {
//                          console.log("Request received");
//                          next(); }
//                      
//                      app.use(logger);

//                      app.get("/", (req, res) => {
//                          res.json({ message: "Home" });
//                                                        });

//                      app.post("/login", (req, res) => {
//                          res.json({ message: "Login" });
//                                                        });


//     Lets learn this ---->   app.use(logger); 

                 // It tells Express that before handling any request, run the logger middleware first.
                 // app.use("/admin", logger); It means only run the logger middleware
                 //  for requests to the /admin route.
                 // app.use() is mainly used to register middleware in Express.
                 // Like   app.use(express.json()) and app.use(logger)




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


