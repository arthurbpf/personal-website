import type { NextPage } from 'next';
import Header from '../components/Header';
import styles from '../styles/index.module.scss';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Navbar from '../components/Navbar';
import Head from 'next/head';

const Home: NextPage = () => {
	const headerTypewriter = (
		<Typewriter
			options={{
				strings: [
					'Hello',
					'Olá',
					'Hola',
					'Hallo',
					'Ciao',
					'こんにちは',
					'你好'
				],
				autoStart: true,
				loop: true
			}}
		/>
	);

	return (
		<div className={styles.rootContainer}>
			<Head>
				<title>Home</title>
				<meta
					name="description"
					content="A brief introduction and links to my social media"
				/>
			</Head>
			<Navbar></Navbar>
			<div className={styles.contentContainer}>
				<Header headerTitle={headerTypewriter} />

				<main>
					<p className={styles.introductionText}>
						My name is Arthur, and this is an attempt at creating a personal
						space to share things that I am enthusiastic about!
					</p>

					<div className={styles.contactContainer}>
						<h2>You can find me here:</h2>
						<div className={styles.iconsContainer}>
							<a
								href="https://github.com/arthurbpf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub />
							</a>
							<a
								href="https://linkedin.com/in/arthurbpf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedinIn />
							</a>
							<a
								href="https://twitter.com/arthurbpf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaTwitter />
							</a>
							<a
								href="https://www.instagram.com/arthurbpf_/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaInstagram />
							</a>
							<a
								href="mailto:arthurbpfernandes@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<HiMail />
							</a>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Home;
