const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const token = req.cookies.token;

    try {
        const { id } = await jwt.verify(token, process.env.TOKEN_SECRET);
        req.body.userId = id;
        next();
    } catch(err) {
        console.log(err);
        res.status(401).send('Access denied');
    }
}