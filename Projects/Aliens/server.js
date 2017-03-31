var express = require('express')
var app = express();

app.use(express.static('./public'));

app.get("/", (req,res)=>{
    res.sendFile('index.html', {root:'./public/html'})
})

var PORT = process.env.PORT || 8080;

app.listen(PORT, (err)=>{
    if (err){
        console.log("Failed to start server:", err)
    }else{
        console.log("Server up and running on:", PORT)
    }
}





















// var express = require('express');
// var app = express();
// var PORT = process.env.PORT || 8080;

// app.use(express.static('./public'))

// //routes

// app.get('/', (req, res)=>{
//     //sendFile uses a Path, not a URL
//     res.sendFile('index.html', {root:'./public/html'});
// })


// app.listen(PORT, (err)=>{
//     if(err){
//         console.log("Failed to start server", err)
//     }else{
//         console.log("Server running on port", PORT)
//     }
// })