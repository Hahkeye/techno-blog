const router = require('express').Router();
const loginRoutes = require('./login-routes');
const postRoutes = require('./post-routes')
const commentRoutes = require('./comment-routes');
const { Post,User} = require('../models');
const { Op } = require('sequelize');
router.use("/login",loginRoutes);
router.use("/post",postRoutes);
router.use("/comment",commentRoutes);

router.get("/home", async (req,res) =>{
    req.session.touch();
    let posts = await Post.findAll({
        include: [{model:User}],
        raw: true
    });
    // console.log(posts);
    // console.log(posts[0]['user.username']);
    console.log(req.session.isLoggedIn);
    res.render('home',{posts: posts,loggedIn: req.session.isLoggedIn});
});

router.get("/dashboard", async (req,res) =>{
    console.log(req.sessionID);
    console.log(req.session.isLoggedIn);
    req.session.touch();
    if(req.session.isLoggedIn){
        let data = await Post.findAll({
            raw: true,
            where: {
                creator_id:{
                    [Op.eq]: req.session.uID
                }
            }
        });
        // console.log(data);
        res.render('dashboard',{loggedIn:req.session.isLoggedIn,posts: data});
    }else{
        res.redirect('/login');
    }
});

router.get("/dashboard/edit/:id", async (req,res) =>{
    console.log(req.params.id);
    console.log(req.session.isLoggedIn);
    req.session.touch();
    if(req.session.isLoggedIn){
        let data = await Post.findByPk(req.params.id,{
            raw: true
        });
        console.log(data);
        res.render('edit',{loggedIn:req.session.isLoggedIn,posts: data});
    }else{
        res.redirect('/login');
    }
});

router.get("*", async (req,res) =>{
    console.log("CATCH ALL");
    req.session.touch();
    res.redirect("/home");
});


module.exports = router;