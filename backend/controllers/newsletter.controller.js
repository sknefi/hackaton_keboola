const express = require('express');
const router = express.Router();
const { specifyNewsletter } = require('../services/intern_file');

async function generateNewsletter(prompt_topic, prompt_keywords, prompt_additional_text) {
	const specification = specifyNewsletter();
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
		},
		body: JSON.stringify({
			model: "sonar-pro",
			messages: [{ role: "user", content: specification + prompt_topic + prompt_keywords + prompt_additional_text }]
		})
	}

	const result = await fetch('https://api.perplexity.ai/chat/completions', options)
	return result;
}

router.post('/generate', async (req, res) => {
	const { prompt_topic, prompt_keywords, prompt_additional_text } = req.body;

	const result = await generateNewsletter(prompt_topic, prompt_keywords, prompt_additional_text)
	if (!result.ok) {
		res.status(500).json({ message: 'Error generating newsletter', error: result.error });
	}

	const data = await result.json();
	res.status(200).json({ message: 'Newsletter generated successfully', data });
});

module.exports = router;