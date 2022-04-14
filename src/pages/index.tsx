import type { NextPage } from 'next';
import styles from '../styles/Main.module.css';

const Home: NextPage = () => {
	return (
		<main className={styles.main}>
			<h1>RPS API</h1>

			<h2>Base API URL</h2>
			<p>https://rps.gamertike.com/api/</p>

			<div className={styles.endpoint}>
				<span className={styles.method}>GET</span>
				<span>
					/<span className={styles.param}>{'{choice}'}</span>
				</span>
			</div>

			<h3>choices</h3>
			<ul className={styles.choices}>
				<li>
					<span className={styles.property}>rock</span>
				</li>
				<li>
					<span className={styles.property}>paper</span>
				</li>
				<li>
					<span className={styles.property}>scissors</span>
				</li>
				<li>
					<span className={styles.property}>random</span>
				</li>
			</ul>

			<h3>response</h3>
			<ul className={styles.response}>
				<li>
					<span className={styles.property}>you</span>: <span className={styles.type}>string</span> - your choice
				</li>
				<li>
					<span className={styles.property}>computer</span>: <span className={styles.type}>string</span> - The computers choice
				</li>
				<li>
					<span className={styles.property}>winner</span>: <span className={styles.type}>boolean | null</span> - Whether you won the game,
					If the value is null, it is a draw.
				</li>
			</ul>
		</main>
	);
};

export default Home;
