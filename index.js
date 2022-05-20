const express = require("express")

const app=express()

app.get("/", function(request, response){
response.send("hello world")
})
app.get("/about", function(request,response){
    response.send("It Is an about page")
})

app.listen(3000, function(){
    console.log("server is on localhost:3000")
})