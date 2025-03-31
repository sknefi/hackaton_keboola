const User = require('../schema/user.schema');

async function getUser(req, res) {
	try {
		const user = await User.findById(req.params.id);
		res.status(200).json(user);
	} catch (error) {
		res.status(404).json({ message: 'User not found' });
	}
}

async function createUser(req, res) {
	try {
		const newUser = await User.create(req.body);
		res.status(201).json(newUser);
	} catch (error) {
		res.status(400).json({ message: 'Invalid user data' });
	}
}

async function updateUser(req, res) {
	try {
		const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
		res.status(200).json(updatedUser);
	} catch (error) {
		res.status(400).json({ message: 'Invalid user data' });
	}
}

async function deleteUser(req, res) {
	try {
		const deletedUser = await User.findByIdAndDelete(req.params.id);
		res.status(200).json(deletedUser);
	} catch (error) {
		res.status(400).json({ message: 'Invalid user data' });
	}
}

async function listUsers(req, res) {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		res.status(400).json({ message: 'Invalid user data' });
	}
}

async function appendHistory(req, res) {
	try {
		const user = await User.findById(req.params.id);
		user.history.push(req.body);
		await user.save();
		res.status(200).json(user);
	} catch (error) {
		res.status(400).json({ message: 'Invalid user data' });
	}
}

async function mockUsers(req, res) {
	try {
		const users = [
			{
			name: 'John Doe',
			email: 'john.doe@example.com',
			password: 'password123',
			history: []
		},
		{
			name: 'Jane Smith',
			email: 'jane.smith@example.com',
			password: 'password456',
			history: []
		},
		{
			name: 'Bob Johnson',
			email: 'bob.johnson@example.com',
			password: 'password789',
			history: [
				{
					prompt_topic: 'USA',
					intern_file: "User wants to generate text based on his topic;Generate HTML code that user will display on frontend and return it as a string;",
					config: {
						prompt_keywords: 'USA, Trump, Biden',
						prompt_text: 'Write a short summary of the news in the USA'
					}
				},
				{
					prompt_topic: 'Europe',
					intern_file: "User wants to generate text based on his topic;Generate HTML code that user will display on frontend and return it as a string;",
					config: {
						prompt_keywords: 'Europe, EU, Brexit',
						prompt_text: 'Write a short summary of the news in Europe'
					}
				}
			]
			}
		]
		await User.insertMany(users);
		res.status(200).json(users);
	} catch (error) {
		res.status(400).json({ message: 'Invalid user data' });
	}
}

module.exports = {
	getUser,
	createUser,
	updateUser,
	deleteUser,
	listUsers,
	appendHistory,
	mockUsers
};
