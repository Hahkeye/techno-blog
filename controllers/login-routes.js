const router = require('express').Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

router.get("/", async (req,res) =>{
    // res.send("POG").status(200);
    res.render("login");
});

router.post("/", async (req,res) =>{
    console.log(req.body);
    let check = await User.findAll({
        raw: true,
        plain: true,
        where:{
            username:{
                [Op.eq]:req.body.username
            }   
        }
    })
    console.log(check);
    if(check){
        // console.log(check);
        let password = await bcrypt.compare(req.body.password,check.password);
        console.log(password);
        // console.log(req.session.id);
        if(password){
            console.log(req.sessionID);
            req.session.save( (err) => {
                // console.log(err);
                req.session.isLoggedIn = true;
                req.session.uID = check.id
                res.redirect("/dashboard");
            });
            // console.log("----",req.session.isLoggedIn);
            
        }
    }else{
        console.log("Username Doesnt Exist.");
        res.redirect("/login");
    }
    
});

router.get("/create", async (req,res) =>{
    // res.send("POG").status(200);
    res.render("create");
});

router.post("/create", async (req,res) =>{
    // console.log("pog create");
    // console.log(req.body)
    let t = await User.create(req.body);
    req.session.save( () => {
        req.session.isLoggedIn = true;
        // req.session.id = 
    });
    res.redirect("/dashboard");
});

router.get('/logout', async (req,res) =>{
    req.session.save( () => {
        req.session.isLoggedIn = false;
        res.redirect("/");
    });
    
});




module.exports = router;
