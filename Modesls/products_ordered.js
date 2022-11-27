const Orders = require('../../Modesls/orders');
const Products = require('../../Modesls/orders');


const get_orders = async (req, res) => { 
    const orders = await Orders.get_orders();
    res.json(orders);

}

const create_order = async (req, res) => {

    const { name } = req.body;

   const orders = await Orders.create_order(name);    
   res.status(201).json({sucess: true ,orders: orders});
}


module.exports = { create_order, get_orders }