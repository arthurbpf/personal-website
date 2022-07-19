import Link from 'next/link';
import styles from './index.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.rootContainer}>
			<div className={styles.itemsContainer}>
				<Link href="/">home</Link>
			</div>
			<div className={styles.itemsContainer}>
				<Link href="/">writing (soon)</Link>
			</div>
		</nav>
	);
};

export default Navbar;
