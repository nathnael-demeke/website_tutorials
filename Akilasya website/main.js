const express = require('express')
const handlebars = require('express3-handlebars')
const formidable = require("formidable")

var app = express()
let port = 80

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')

app.use(express.static(__dirname  + "\\public"))
app.get("/", (request,response) => {
     response.render("index")    
})
app.listen(port, () => {
    console.log("website running at http://localhost")
})