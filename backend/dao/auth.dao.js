const User = require('../schema/user.schema');
const jwt = require('jsonwebtoken');

async function register(req, res) {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({ message: 'Email and password are required' });
	}
	const exists = await User.findOne({ email });
	if (exists) {
		return res.status(400).json({ message: 'User already exists' });
	}
	const user = await User.create({ email, password, name: email.split('@')[0], history: [] });
	res.status(201).json(user);
}

async function login(req, res) {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({ message: 'Email and password are required' });
	}
	const user = await User.findOne({ email });
	if (!user) {
		return res.status(400).json({ message: 'User not found' });
	}
	if (user.password !== password) {
		return res.status(400).json({ message: 'Invalid password' });
	}
	const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
	const userData = {
		_id: user._id,
		email: user.email,
		name: user.name,
		history: user.history,
		token: token,
	};
	res.status(200).json(userData);
}

module.exports = { register, login };
