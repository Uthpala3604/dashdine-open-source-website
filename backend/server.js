require('dotenv').config();
const http = require("http");
const {connectDB} = require('./src/db').connectDB;

const PORT = process.env.PORT || 5000;

//connect to MongoDB
connectDB();

//Middleware
app.use(XPathExpression.json());

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-Type": "application/json"});
    res.end(JSON.stringify({message: "Server is running"}));
});


//Start the server
server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});