import s from './HashSlide.module.css';
import Button from '../Button/Button';

const HashSlide = ({ data, switcher }) => {
	const { first, second } = data;
	return (
		<div className={s.wrapper}>
			<button type="button" className={s.hashBtn} onClick={() => switcher(0)}>
				{first}
			</button>
			<button type="button" className={s.hashBtn} onClick={() => switcher(1)}>
				{second}
			</button>
		</div>
	);
};

export default HashSlide;
