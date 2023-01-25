import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async function (req, res) {
	if (!configuration.apiKey) {
		res.status(500).json({
			error: {
				message: 'OpenAI API key not configured, please follow instructions in README.md',
			},
		})
		return
	}

	const movie = req.body.movie || ''
	if (movie.trim().length === 0) {
		res.status(400).json({
			error: {
				message: 'Please enter a valid movie',
			},
		})
		return
	}

	try {
		const completion = await openai.createCompletion({
			model: 'text-davinci-003',
			prompt: generatePrompt(movie),
			temperature: 0.6,
		})
		res.status(200).json({ result: completion.data.choices[0].text })
	} catch (error) {
		// Consider adjusting the error handling logic for your use case
		if (error.response) {
			console.error(error.response.status, error.response.data)
			res.status(error.response.status).json(error.response.data)
		} else {
			console.error(`Error with OpenAI API request: ${error.message}`)
			res.status(500).json({
				error: {
					message: 'An error occurred during your request.',
				},
			})
		}
	}
}

function generatePrompt(movie) {
	const capitalizedInput = movie[0].toUpperCase() + movie.slice(1).toLowerCase()

	return `Convert movie titles into emoji.

Movie: Back to the Future
Emojis: 👨👴🚗🕒
Movie: Batman
Emojis: 🦇🤵
Movie: Transformers
Emojis: 🚗🤖
Movie: 12 Angry Men
Emojis: 🕛😡👨👨
Movie: One Flew Over The Cuckoo's Nest
Emojis: 1️🛫🐦🐣
Movie: The Good, The Bad, And The Ugly
Emojis:🤠🤬🤢
Movie: ${capitalizedInput}
Emojis:`
}
