const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
// const routes = require("./routes/index.js"); 

const PORT = process.env.PORT || 5000;
const app = express();
const items = require('./routes/api/items');
const user =  require("./routes/api/user");

//db config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
.connect(db)
.then(()=> console.log("MongoDB connected......"))
.catch(err=> console.log(err))

//Bodyparser Middle
app.use(bodyParser.json());


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use routes
// app.use(routes);
app.use('/api/items', items);
app.use(user);

app.listen(PORT, ()=>
    console.log(`Server started on http://localhost:${PORT}`
))