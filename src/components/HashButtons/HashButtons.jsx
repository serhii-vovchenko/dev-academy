import s from './HashButtons.module.css';

const HashButtons = ({ data, active, handleSlide }) => {
	return (
		<ul className={s.wrapper}>
			{data.map((el, i) => {
				return (
					<li className={i === active ? s.active : s.item} onClick={() => handleSlide(i)} key={i}>
						{el.course}
					</li>
				);
			})}
		</ul>
	);
};

export default HashButtons;
