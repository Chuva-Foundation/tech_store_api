const User = require('../../Modesls/users');


const get_info = async (req, res) => { 
    const {user_id} = req
    const user = await User.get_byId(user_id);
    res.json(user);

}


const create_user = async (req, res) => {

    const { name, username, email, password, birth, gender, is_admin  } = req.body;

    if (!(name && username && email && password )) {
        return res.status(400).json({sucess: false, error: "All required fields must be filled"});
    }

    // if (email) {
    //     res.json({sucess: false, msg: "email already exit"});
    // }

   const user = await User.create_user(name, username, email, password, birth, gender, is_admin);    
   res.status(201).json({sucess: true ,user: user});

}

const update_user = async (req, res) => {

    const { name, username, email, password, birth, gender  } = req.body;
    const {user_id} = req;

   const user = await User.update_user(user_id, name, username, email, password, birth, gender);    

   res.status(201).json({sucess: true ,user: user});
}


const delete_user = async (req, res) => {

    const {user_id} = req;
    
    const user = await User.delete_user(user_id) 

    res.json({sucess: true, msg: "user Deleted", user} ) 
}

module.exports = { create_user, get_info, update_user, delete_user }
