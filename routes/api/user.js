const express = require('express');
const router = express.Router();
const User = require("../../models/user");

router.post("/api/user", (req,res) => {
  console.log(req.body.user)
  if (req.body.email &&
    req.body.password) {
    var userData = {
      email: req.body.email,
      password: req.body.password
    } 
    //use schema.create to insert data into the db
    User.create(userData, (err, user) => {
      if (err) {
        return res.json(err)
      } else {
        return res.json({success: true});
      }
    });
  } else if (req.body.user.facebookID && req.body.user.name) {
    var userData = {
      facebookID: req.body.user.facebookID,
      name: req.body.user.name
    } 

    User.create(userData, (err, user) => {
      if (err) {
        return res.json(err)
      } else {
        return res.json({success: true});
      }
    });
  }
})

router.get('/api/user', (req,res) => {
  User.find()
  .then(user => res.json(user))
});



router.post("/api/user/login", (req,res) => {
  const { email, password} = req.body;
  User.findOne({email}).then((user => {
    if (password !== user.password){
      res.send("Try Again")
    }
    else{ 
      res.json(user)
    }
  }
    )
)});

module.exports = router;