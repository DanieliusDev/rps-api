import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<APIResponse | APIError>) {
	if (req.method !== 'GET')
		res.status(405).json({ code: 'METHOD_NOT_ALLOWED', message: `Method ${req.method} is not allowed.` });
	const player = genChoice();
	const computer = genChoice();
	res.status(200).json({ you: player, computer, winner: getWinner(player, computer) });
}

export const availableChoices = ['rock', 'r', 'paper', 'p', 'scissors', 's'] as const;

export interface APIResponse {
	you: string;
	computer: string;
	winner: boolean | null;
}

export interface APIError<Code extends keyof APIErrors = keyof APIErrors> {
	code: Code;
	message: APIErrors[Code];
}

interface APIErrors {
	INVALID_CHOICE: 'The provided choice is invalid.';
	METHOD_NOT_ALLOWED: string;
}

export function resolveChoice(choice: typeof availableChoices[number]) {
	if (['rock', 'r'].includes(choice)) return 'rock';
	if (['paper', 'p'].includes(choice)) return 'paper';
	if (['scissors', 's'].includes(choice)) return 'scissors';
}

export function getWinner(player: string, computer: string) {
	if (player === computer) return null;
	else if (player === 'rock' && computer === 'scissors') return true;
	else if (player === 'paper' && computer === 'rock') return true;
	else if (player === 'scissors' && computer === 'paper') return true;
	else return false;
}

export function genChoice() {
	return resolveChoice(availableChoices[Math.floor(Math.random() * availableChoices.length)])!;
}
