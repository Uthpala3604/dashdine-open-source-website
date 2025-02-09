require('dotenv').config();
const http = require("http");
const {connectDB} = require('./src/db');

const PORT = process.env.PORT || 5000;

//connect to MongoDB
connectDB();

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-Type": "application/json"});
    res.end(JSON.stringify({message: "Server is running"}));
});


server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});