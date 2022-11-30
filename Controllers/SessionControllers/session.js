const User = require('../../Modesls/users');
const jwt = require('jsonwebtoken');

const create = async (req, res) => {

    const { email, password } = req.body;

   const user = await User.get_byEmail(email);    

   if (!user) {
     return res.status(401).json({ error: 'Wrong Email or Password'});
   }

   // check if password is valid
   const isPasswordValid = await User.check_password(password, user.password);

   if (!isPasswordValid) {
     return res.status(401).json({
        error: 'Wrong Email or Password'
     })
   }

   res.status(201).json(
    {
        name: user.name,
        token: jwt.sign({id: user.id}, process.env.TOKEN, {
            expiresIn: '30d'
        } )
    }
   );
}

module.exports = { create }