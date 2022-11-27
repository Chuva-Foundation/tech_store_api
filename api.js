const express = require("express");
const user_controller = require('./Controllers/UserControllers/User')
const categories_controller = require('./Controllers/CategoriesControllers/categories')
const products_controller = require('./Controllers/ProductsControllers/products')
const session_contoller = require('./Controllers/SessionControllers/session')
require("dotenv").config()
const auth = require("./midlewere/auth");




const app = express();

app.use(express.json());

app.post("/user", user_controller.create_user);
app.post("/session", session_contoller.create);

app.get("/categories", categories_controller.get_categories);
app.get("/products/id", products_controller.get_byId);
app.get("/products/cat", products_controller.get_bycat);
app.get("/products", products_controller.get_all);


// Ptivate
app.use(auth)
app.get("/user", user_controller.get_info);
app.put("/user", user_controller.update_user);
app.delete("/user/:answer", user_controller.delete_user);
app.post("/categories", categories_controller.create_categories);
app.post("/products", products_controller.create_products);



app.listen(3001, () => {
    console.log("lintenig on port 3001...")
})