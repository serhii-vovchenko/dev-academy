import Container from '../Container/Container';
import HashSlide from '../HashSlide/HashSlide';
import s from './CareerCenter.module.css';

import { careerCenter } from '../../assets/data/mocData';
import { useState } from 'react';

const CareerCenter = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	const PHOTO_DIRECTORY = '/img/career-center/';

	const { title, description, image } = careerCenter[activeSlide];
	const firstBtn = careerCenter[0].hashBtn;
	const secondBtn = careerCenter[1].hashBtn;

	const handleSwitchSlide = i => {
		setActiveSlide(i);
	};

	return (
		<section className={s.section}>
			<Container>
				<h2>Центр кар'єри</h2>
				<div className={s.wrapper}>
					<div className={s.contentBox}>
						<div>
							<h3>{title}</h3>
							<p>{description}</p>
						</div>
						<div className={s.imgBox}>
							<img src={`${PHOTO_DIRECTORY}${image}`} alt={title} width="223" height="183" />
						</div>
					</div>
					<HashSlide data={{ first: firstBtn, second: secondBtn }} switcher={handleSwitchSlide} />
				</div>
			</Container>
		</section>
	);
};

export default CareerCenter;
