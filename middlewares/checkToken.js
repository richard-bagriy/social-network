const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    switch (req.path) {
        case '/api/auth/login':
        case '/api/auth/registration':
        case '/api/auth':
            return next()
    }

    try {
        const { id } = await jwt.verify(req.cookies.token, process.env.TOKEN_SECRET);
        req.body.authID = id;
        next();
    } catch(err) {
        res.status(401).send('Access denied');
    }
}