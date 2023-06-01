import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './styles.module.scss';

type Props = {
	children?: React.ReactNode;
};

const RotationWrapper: React.FC<Props> = ({ children }) => {
	const x = useMotionValue(200);
	const y = useMotionValue(200);

	const rotateX = useTransform(y, [0, 400], [15, -15]);
	const rotateY = useTransform(x, [0, 400], [-15, 15]);

	return (
		<>
			<motion.div
				className={styles.main}
				style={{
					rotateX,
					rotateY
				}}
				onMouseMove={(event) => {
					const rect = event.currentTarget.getBoundingClientRect();

					animate(x, (event.clientX - rect.left) / 2);
					animate(y, event.clientY - rect.top);
				}}
				onMouseLeave={() => {
					animate(x, 200, { duration: 1 });
					animate(y, 200, { duration: 1 });
				}}
			>
				{children}
			</motion.div>
		</>
	);
};

export default RotationWrapper;
