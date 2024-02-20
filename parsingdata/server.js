const express = require("express")
const app = express()

//boiler plate code
//middleware to parse data from html input
app.use(express.urlencoded({extended: true}))

//to parse json data
app.use(express.json())

app.post("/book",(req,res)=>{
  const val = req.body.val
  const name = req.body.name
  // res.send(`book name: ${val} and val: ${val}`)
  res.json({
    resval : val,
    resname : name
  })

})

// getting data from query variables
app.get("/book",(req,res)=>{
  const val = req.query.val
  const name = req.query.name
  console.log(`val: ${req.query.val}`)
  res.json({
    "queryval": val
  })
})

app.listen(3000)
