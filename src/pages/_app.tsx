import '../styles/globals.css';
import logo from '../public/logo.jpg';
import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>RPS API</title>
				<meta name="description" content="A RPS API." />
				<meta name="keywords" content="RPS, API, Rock, Paper, Scissors" />
				<meta name="author" content="Gamertike" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href={logo.src} />
			</Head>

			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
