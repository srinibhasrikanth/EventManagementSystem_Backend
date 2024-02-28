const express=require('express')
const userModel=require('../models/userModel.js')
const { loginController, registerController } = require('../controllers/authController')
const {requireSignIn,isAdmin}=require('../middlewares/authMiddleware.js')

const router=express.Router()

//login post method
router.post('/login',loginController)

//register post method
router.post('/register',registerController)

//protected route auth
router.get("/volunteer-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

module.exports=router