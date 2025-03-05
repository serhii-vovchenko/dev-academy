import Container from '../Container/Container';
import s from './WhoBenefits.module.css';
import { whoBenefits } from '../../assets/data/mocData';

const WhoBenefits = () => {
	return (
		<section className={s.section}>
			<Container>
				<h2 className={s.title}>Кому буде корисний курс</h2>
				<ul className={s.list}>
					{whoBenefits.map((el, i) => {
						return (
							<li key={i} className={i === 0 ? s.firstItem : s.item}>
								<h3>{el.title}</h3>
								<p>{el.text}</p>
							</li>
						);
					})}
				</ul>
			</Container>
		</section>
	);
};

export default WhoBenefits;
