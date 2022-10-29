const router = require('express').Router();
const { Post,Comment,User } = require('../models');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

router.get("/:id", async (req,res) =>{
    req.session.touch();
    console.log(req.params.id);
    // res.render("login");
    // Post.find
    // Post.fi
    //        plain: false,
    //raw: true,
    if(req.session.isLoggedIn){
        let p = await Post.findByPk(req.params.id,{
            include:[Comment]
        });
    
        // console.log(p['dataValues']);
        // console.log(p['dataValues']['comments']);
        res.render('post',{post: p['dataValues'],comments: p['dataValues']['comments']});
    }else{
        res.redirect('/login')
    }
    
});

router.get("/add/p", async (req,res) =>{
    res.render('createPost');
});
router.post("/add/p", async (req,res) =>{
    // req.session.touch();
    // console.log(req.body);
    
    if(req.session.isLoggedIn){
        req.body['creator_id']=req.session.uID;
        console.log(req.body);
        let dat = await Post.create(req.body)
        res.redirect("/home");
    }
});
router.get("/add", async (req,res) =>{
    req.session.touch();
    if(req.session.isLoggedIn){
        console.log(req.body);
        let dat = await Comment.create(req.body)
    }
});
module.exports = router;