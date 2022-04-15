/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	redirects: () => [
		{
			source: '/docs',
			destination: '/',
			permanent: false,
		},
		{
			source: '/github',
			destination: 'https://github.com/gamertike/rps-api',
			permanent: false,
		},
	],
};

module.exports = nextConfig;
