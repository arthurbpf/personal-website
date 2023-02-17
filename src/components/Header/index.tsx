import DotGrid from './DotGrid';
import RotationWrapper from './RotationWrapper';
import TitleBox from './TitleBox';

interface Props {
	headerTitle: React.ReactNode | JSX.Element;
}

const Header: React.FC<Props> = ({ headerTitle }) => {
	return (
		<RotationWrapper>
			<DotGrid />
			<TitleBox headerTitle={headerTitle} />
		</RotationWrapper>
	);
};

export default Header;
