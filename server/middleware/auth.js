const jwt = require('jsonwebtoken');

    const verifyToken = (req, res, next) => {
      const token = req.header('Authorization');
      if (!token) return res.status(401).json({ message: 'Access denied' });

      try {
        const verified = jwt.verify(token, 'your_jwt_secret');
        req.user = verified;
        if (verified.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
        next();
      } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
      }
    };

    module.exports = verifyToken;
