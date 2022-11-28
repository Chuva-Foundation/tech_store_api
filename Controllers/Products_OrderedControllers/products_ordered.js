const Ordered = require('../../Modesls/products_ordered');





const get_ordered = async (req, res) => { 
    const ordered = await Ordered.get_ordered(orders_id);
    res.json(ordered);

}

const create_ordered = async (req, res) => {

    const { orders_id, products_id, quantity, price } = req.body;

    

   const ordered = await Ordered.create_ordered(orders_id, products_id, quantity, price);    
   
   res.status(201).json({sucess: true ,ordered: ordered});
}


module.exports = { create_ordered, get_ordered }