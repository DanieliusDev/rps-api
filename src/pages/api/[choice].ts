import { NextApiRequest, NextApiResponse } from 'next';
import { APIError, APIResponse, availableChoices, genChoice, getWinner, resolveChoice } from '.';

export default function handler(req: NextApiRequest, res: NextApiResponse<APIResponse | APIError>) {
	if (req.method !== 'GET')
		res.status(405).json({ code: 'METHOD_NOT_ALLOWED', message: `Method ${req.method} is not allowed.` });
	let { choice: player } = req.query as { choice: typeof availableChoices[number] };
	if (!availableChoices.includes(player))
		return res.status(400).json({ code: 'INVALID_CHOICE', message: 'The provided choice is invalid.' });
	player = resolveChoice(player)!;
	const computer = genChoice();
	res.status(200).json({ you: player, computer, winner: getWinner(player, computer) });
}
