const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    // Logique de vérification du token ici
    next();
};

module.exports = authMiddleware;
