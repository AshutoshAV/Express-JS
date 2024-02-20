const express = require("express")
const app = express()

//view engine to render ejs (html) file
app.set('view engine','ejs')

//creating app with get request
app.get("/",(req,res)=>{

  console.log("here");

  //to send status code
  // res.sendStatus(500);

  // to send plain/txt file to directly output
  // res.send("Hi");

  //to send status code along with plain/txt
  // res.status(500).send("Hello")

  //to send a json object
  // res.json({ "message":"sending json data" })

  //to send a file
  // res.download("server.js")

  //to render an html (ejs) file and send json obj to the html
  res.render("index",{ text : "json obj"})
})

//CRUD
//app.post app.get app.put app.delete

//start a server on specified port
app.listen(3000)
