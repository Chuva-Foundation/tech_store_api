const express = require("express");
const user_controller = require('./Controllers/UserControllers/User')
const categories_controller = require('./Controllers/CategoriesControllers/categories')
const products_controller = require('./Controllers/ProductsControllers/products')
const session_controller = require('./Controllers/SessionControllers/session')
const cart_controller = require('./Controllers/CartControllers/cart')
const phones_controller = require('./Controllers/PhonesControllers/phones')
const orders_controller = require('./Controllers/OrdersControllers/orders')
const ordered_controller = require('./Controllers/Products_OrderedControllers/products_ordered')


require("dotenv").config()
const auth = require("./midlewere/auth");




const app = express();

app.use(express.json());

app.post("/user", user_controller.create_user);
app.post("/session", session_controller.create);


app.get("/categories", categories_controller.get_categories);
app.get("/products/id", products_controller.get_byId);
app.get("/products/cat", products_controller.get_bycat);
app.get("/products", products_controller.get_all);



// Ptivate
app.use(auth)
app.get("/user", user_controller.get_byId);
app.get("/user", user_controller.get_byEmail);
app.get("/user", user_controller.get_allusers);
app.put("/user", user_controller.update_user);
app.delete("/user", user_controller.delete_user);app.get("/cart", cart_controller.get_cart);
app.get("/phones", phones_controller.get_phones);
app.get("/orders", orders_controller.get_orders);
app.get("/orders", orders_controller.get_allorders);
app.get("/ordered", ordered_controller.get_ordered);

app.post("/categories", categories_controller.create_categories);
app.post("/products", products_controller.create_products);
app.post("/cart", cart_controller.create_cart);
app.post("/phones", phones_controller.create_phones);
app.post("/orders", orders_controller.create_order);
app.post("/ordered", ordered_controller.create_ordered);



app.listen(3001, () => {
    console.log("lintenig on port 3001...")
})