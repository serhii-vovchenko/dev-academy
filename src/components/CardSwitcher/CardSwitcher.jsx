import s from './CardSwitcher.module.css';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

const CardSwitcher = ({ current, last, previous, next }) => {
	return (
		<div className={s.wrapper}>
			<button type="button" onClick={previous}>
				<CgChevronLeft color="black" size="16" />
			</button>
			<span>{`${current} / ${last}`}</span>
			<button type="button" onClick={next}>
				<CgChevronRight className={s.icon} color="black" size="16" />
			</button>
		</div>
	);
};

export default CardSwitcher;
