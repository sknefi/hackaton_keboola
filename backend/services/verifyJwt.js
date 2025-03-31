
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
	const token = req.headers['authorization'];
	if (!token) return res.status(401).json({ message: 'Unauthorized' });

	const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
	if (!decoded) return res.status(401).json({ message: 'Unauthorized' });
	req.userId = decoded.id;
	next();
};

module.exports = verifyToken;
