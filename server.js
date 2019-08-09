const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/index.js"); 


const PORT = process.env.PORT || 5000;
const app = express();

//connecting Database
connectDB();

//Init  Middleware
app.use(
    express.json({
        extended:false
    })
);

app.use(routes);

app.listen(PORT, ()=>
    console.log(`Server started on http://localhost:${PORT}`
))