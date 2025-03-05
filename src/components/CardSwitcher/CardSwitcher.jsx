import s from './CardSwitcher.module.css';

const CardSwitcher = ({ current, last, previous, next }) => {
	return (
		<div className={s.wrapper}>
			<button type="button" onClick={previous}>
				-
			</button>
			<span>{`${current} / ${last}`}</span>
			<button type="button" onClick={next}>
				+
			</button>
		</div>
	);
};

export default CardSwitcher;
