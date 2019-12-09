module.exports = (req, res, next) => {
    const token = req.cookies.token;
    
    console.log(token);
    if (token) {
        next();
    } else {
        res.status(401).send('Access denied');
    }
}