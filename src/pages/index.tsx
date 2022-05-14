import { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Main.module.css';

const Home: NextPage = () => {
	return (
		<main className={styles.main}>
			<Link href="/github" passHref>
				<a>RPS API</a>
			</Link>

			<h2>Base API URL</h2>
			<p>https://rps.gamertike.com/api/</p>

			<div className={styles.endpoint}>
				<span className={styles.method}>GET</span>
				<span>
					/<span className={styles.param}>{'{choice?}'}</span>
				</span>
			</div>

			<h3>choices</h3>
			<ul className={styles.choices}>
				<li>
					<span className={styles.property}>rock</span>
					<span className={styles.alias}>r</span>
				</li>
				<li>
					<span className={styles.property}>paper</span>
					<span className={styles.alias}>p</span>
				</li>
				<li>
					<span className={styles.property}>scissors</span>
					<span className={styles.alias}>s</span>
				</li>
			</ul>

			<h3>response</h3>
			<ul className={styles.response}>
				<li>
					<span className={styles.property}>you</span>:{' '}
					<span className={styles.type}>{'"rock" | "paper" | "scissors"'}</span> - Your choice
				</li>
				<li>
					<span className={styles.property}>computer</span>:{' '}
					<span className={styles.type}>{'"rock" | "paper" | "scissors"'}</span> - The computers choice
				</li>
				<li>
					<span className={styles.property}>winner</span>: <span className={styles.type}>boolean | null</span>{' '}
					- Whether you won the game. If null, it{'\''}s a draw.
				</li>
			</ul>
		</main>
	);
};

export default Home;
