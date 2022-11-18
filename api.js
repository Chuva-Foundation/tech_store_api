const express = require("express");
const usercontroller = require('./Controllers/UserControllers/User')
require("dotenv").config()
const auth = require("./midlewere/auth");
const User = require("./Modesls/users");



const app = express();

app.use(express.json());

app.post('/user', usercontroller.create_user)



app.listen(3001, () => {
    console.log("lintenig on port 3001...")
})