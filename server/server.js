const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
app.use(cors())
app.use(express.json())

//middleware
// app.use(express.static(path.join(__dirname, "../public")))
app.get("/", function (req,res){
    res.sendFile(path.join(__dirname,"../public/landing.html"))
})

const port = process.env.PORT || 6900

app.listen(port, () => {
    console.log(`Port ${port} locked and loaded.`)
})