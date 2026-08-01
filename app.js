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
                                               
app.post("/register" , (req,res)=>{             
    res.json({
        message: "Hello login successfull"}
    )
console.log(req.body.name);                     // req.body contains all the data send by user
console.log(req.body.email);   
console.log(req.body.password);
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


