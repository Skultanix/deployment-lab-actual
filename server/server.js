const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
app.use(cors())
app.use(express.json())

//middleware
app.use(express.static(path.join(__dirname, "../public")))

const port = process.env.PORT || 6900

app.listen(port, () => {
    console.log(`Port ${port} locked and loaded.`)
})