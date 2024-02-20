const express = require("express")
const app = express()

app.set('view engine','ejs')

app.get("/",(req,res)=>{
  res.render("index",{text:"json obj"})
})

const userRouter = require("./routes/user")
app.use("/user", userRouter)

const bookRouter = require("./routes/book")
app.use("/book", bookRouter)

app.listen(3000);
