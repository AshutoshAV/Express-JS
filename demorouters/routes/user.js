const express = require("express")
const router = express.Router()

//router.get router.post
router.get("/",(req,res)=>{
  res.send("users list")
})

router.get("/new",(req,res)=>{
  res.send("get user")
})

router.post("/new",(req,res)=>{
  res.send("post user")
})

module.exports = router
