require("colors");
var express = require("express"),
    routes = require("./routes"),
    app = express();

//PORT
var PORT = process.env.PORT || 8080;

//Routes
routes(app);

//Middleware
app.use(express.static("public"));

app.listen(PORT, (err)=>{
    if(err){
        console.log("Failed to connect to Server:".red, err)
    }else{
        console.log("Server up and running".green.bold, "PORT".yellow, PORT)
    }
})





















// require("colors");
// var express = require("express"),
//     app = express(),
//     routes = require("./routes");


// //PORT
// var PORT = process.env.PORT || 8080;
// Routes = require("./routes/index.js")


//   app.use(express.static('public'))

// //Routes
// routes(app);

// app.listen(PORT, (err)=>{
//     if(err){
//         console.log("Failed to start server:".red, err)
//     }else{
//         console.log("Server up and running:".green.bold, "PORT:".yellow, PORT)
//     }
// })