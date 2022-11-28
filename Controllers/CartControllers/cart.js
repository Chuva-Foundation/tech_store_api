const Cart = require('../../Modesls/cart');





const get_cart = async (req, res) => { 
    const cart = await Cart.get_cart(users_id);
    res.json(cart);

}

const create_cart = async (req, res) => {

    const { users_id, products_id, quantity, price } = req.body;
    const cart = await Cart.create_cart(users_id, products_id, quantity, price);    
   
   res.status(201).json({sucess: true ,cart: cart});
}


module.exports = { create_cart, get_cart }