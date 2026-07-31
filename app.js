const express = require('express');
const app = express();
const port = 3000;

// app.get("/", (req,res)=>{
//     res.send("Hello this is home page")
// })

// app.get("/about", (req,res)=>{
//     res.send("Hello this is about page")
// })

// app.get("/contact", (req,res)=>{
//     res.send("Hello this is contact page")
// })

// app.get("/products/:productid", (req, res)=>{
//      const id = req.params.productid;
//     res.send(`Hello this is Product ${id} page`)
//  })

// query paramters

// app.get("/search", (req, res)=>{
//      console.log(req.query);
//      res.send("Hello this is search page")

// }

// )

// --------------------------------------------------
 
 app.get("/search", (req, res)=>{
     const name = req.query.name;
     const city = req.query.city;
     res.send(`Hello ${name} from ${city}`)

}

)




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


