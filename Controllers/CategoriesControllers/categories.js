const Categories = require('../../Modesls/categories');


const get_categories = async (req, res) => { 
    const categories = await Categories.get_categories();
    res.json(categories);

}

const create_categories = async (req, res) => {

    const { name } = req.body;
    if (!(name)) {
        return res.status(400).json({sucess: false, error: "Categories name must be filled"});
    }

   const categories = await Categories.create_categories(name);    
   res.status(201).json({sucess: true ,categories: categories});
}


module.exports = { create_categories, get_categories }