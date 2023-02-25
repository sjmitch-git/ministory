import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async function generate(req, res) {
	if (!configuration.apiKey) {
		res.status(500).json({
			error: {
				message: 'OpenAI API key not configured, please follow instructions in README.md',
			},
		})
		return
	}

	const query = req.body.query || ''
	const genre = req.body.genre || ''

	if (query.trim().length === 0) {
		res.status(400).json({
			error: {
				message: 'Please enter a valid query',
			},
		})
		return
	}

	try {
		const completion = await openai.createCompletion({
			model: 'text-davinci-003',
			prompt: generatePrompt(query, genre),
			temperature: 0.8,
			max_tokens: 100,
			top_p: 1.0,
			frequency_penalty: 0.5,
			presence_penalty: 0.0,
		})
		res.status(200).json({ result: completion.data.choices[0].text })
	} catch (error) {
		if (error.response) {
			res.status(error.response.status).json(error.response.data)
		} else {
			res.status(500).json({
				error: {
					message: 'An error occurred during your request.',
				},
			})
		}
	}
}

function generatePrompt(query, genre) {
	return `Topic: ${query}
One-Paragraph ${genre} Story:`
}
