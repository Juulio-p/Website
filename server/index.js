import express from "express"; 

const express = require("express"); 
PORT = 5000; 
app= express(); 




app.get("/" , (req , res)=> {

    res.render("LoginForm")
}); 

app.listen(PORT , () => console.log('listening on port: ${PORT}')); 
