// connection to the database

const mongoose = require('mongoose');

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.DATABASE_URL);
		console.log('Connected to the database');
	} catch (error) {
		console.error('Error connecting to the database:', error);
		process.exit(1);
	}
};

module.exports = dbConnection;