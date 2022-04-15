import { NextApiRequest, NextApiResponse } from 'next';

export interface APIResponse {
	you: string;
	computer: string;
	winner: boolean | null;
}

interface APIError<Code extends keyof APIErrors = keyof APIErrors> {
	code: Code;
	message: APIErrors[Code];
}

interface APIErrors {
	INVALID_CHOICE: 'The provided choice is invalid.';
	METHOD_NOT_ALLOWED: string; 
}

const availableChoices = ['rock', 'paper', 'scissors'];

export default function handler(req: NextApiRequest, res: NextApiResponse<APIResponse | APIError>) {
	if (req.method !== 'GET') res.status(405).json({ code: 'METHOD_NOT_ALLOWED', message: `Method ${req.method} is not allowed.` });

	let { choice } = req.query as Record<string, string>;

	if (choice === 'random') choice = availableChoices[Math.floor(Math.random() * availableChoices.length)];

	if (!availableChoices.includes(choice) && choice !== 'random') return res.status(400).json({ code: 'INVALID_CHOICE', message: 'The provided choice is invalid.' });

	const computer = availableChoices[Math.floor(Math.random() * availableChoices.length)];

	let winner;
	if (choice === computer) winner = null;
	else if (choice === 'rock' && computer === 'scissors') winner = true;
	else if (choice === 'paper' && computer === 'rock') winner = true;
	else if (choice === 'scissors' && computer === 'paper') winner = true;
	else winner = false;

	res.status(200).json({ you: choice, computer, winner });
}
