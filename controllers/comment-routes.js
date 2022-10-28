const router = require('express').Router();
const { User,Post,Comment } = require('../models');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

router.post("/add", async (req,res) =>{
    req.session.touch();
    console.log(req.body);
    if(req.session.isLoggedIn){
        // console.log(req.body);
        let dat = await Comment.create(req.body)
        res.redirect("/post/1");
    }
   
});
module.exports = router;