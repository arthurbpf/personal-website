import styles from './index.module.scss';
import { FC } from 'react';

interface HeaderProps {
	headerTitle: React.ReactNode;
}

const TitleBox: FC<HeaderProps> = ({ headerTitle }) => {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.titleContainer}>
				{/*
					workaround for backdrop-filter having no effect when text is empty
				*/}
				<h1>{headerTitle}</h1>
			</div>
		</header>
	);
};

export default TitleBox;
