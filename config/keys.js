require("dotenv").config();
const user = process.env.dbUser;
const pass = process.env.dbPass;
module.exports ={
    mongoURI: 'mongodb+srv://' + user + ':' + pass + '@campingproject-yqqyz.mongodb.net/test?retryWrites=true&w=majority'
}