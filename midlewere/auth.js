const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {

    const authToken = req.headers.authorization;


    let token =  '';

    if (authToken) {
        token = authToken.split(' ')
    }


    jwt.verify(token[1], process.env.TOKEN, function (err, decoded) {
        
        if (err) {
            return res.status(401).json({
                error: 'Token Invalid'
            })
        }

        req.user_id = decoded.id;
        next();
    });
}