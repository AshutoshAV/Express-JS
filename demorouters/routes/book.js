const express = require("express")
const router = express.Router()
//order is top to bottom
router.get("/",(req,res) =>{
  res.send("at /book")
})

router.route("/:id")
  .get((req,res)=>{
    res.send(`get book with id: ${req.params.id}`)
  }).post((req,res)=>{
    res.send(`create book with id: ${req.params.id}`)
  }).put((req,res)=>{
    res.send(`update book with id: ${req.params.id}`)
  }).delete((req,res)=>{
    res.send(`delete book with id: ${req.params.id}`)
  })


module.exports = router
