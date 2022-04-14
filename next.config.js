/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	redirects: [
		{
			source: '/docs',
			destination: '/',
			permanent: true,
		},
	],
};

module.exports = nextConfig;
