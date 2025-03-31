
const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({
	prompt_keywords: String,
	prompt_text: String,
});

const historySchema = new mongoose.Schema({
	prompt_topic: String,
	intern_file: String,
	config: configSchema,

	ai_response: String,
	date: Date,
	created_at: Date,
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
	history: [historySchema], // list of history items
});

module.exports = mongoose.model('User', userSchema);