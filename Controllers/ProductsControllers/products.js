const Products = require('../../Modesls/products');


const get_bycat = async (req, res) => { 
    const products = await Products.get_bycat();
    res.json(products);

}

const get_byId = async (req, res) => { 
    const products = await Products.get_byId();
    res.json(products);

}

const get_all = async (req, res) => { 
    const products = await Products.get_all();
    res.json(products);

}

const create_products = async (req, res) => {

    const { name, price, discriptions, img_link } = req.body;

    if (!(name && price)) {
        console.log();
        return res.status(400).json({sucess: false, error: "Riquired must be filled"});
    }

   const products = await Products.create_products(name, price, discriptions, img_link);    
   
   res.status(201).json({sucess: true ,products: products});
}


module.exports = { create_products, get_bycat, get_byId, get_all }