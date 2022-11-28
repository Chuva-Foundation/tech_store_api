const Phones = require('../../Modesls/phones');


const get_phones = async (req, res) => { 
    const phones = await Phones.get_phones();
    res.json(phones);
}

const get_phonesbyid = async (req, res) => { 
    const phones = await Phones.get_phonesByid(users_id);
    res.json(phones);

}

const create_phones = async (req, res) => {

    const { number, users_id } = req.body;
    if (!(number)) {
        return res.status(400).json({sucess: false, error: "number must be filled"});
    }

   const phones = await Phones.create_phones(number, users_id);    
   res.status(201).json({sucess: true, phones: phones});
}


module.exports = { create_phones, get_phones, get_phonesbyid }