module.exports = (req, res, next) => {
    const token = req.header('auth-token');

    if (token) {
        next();
    } else {
        res.status(401).send('Access denied');
    }
}