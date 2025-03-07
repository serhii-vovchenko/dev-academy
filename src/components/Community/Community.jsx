import s from './Community.module.css';
import Container from '../Container/Container';
import HashSlide from '../HashSlide/HashSlide';

import { community } from '../../assets/data/mocData';
import { useState } from 'react';

const Community = () => {
	const [activeSlide, setActiveSlide] = useState(0);

	const PHOTO_DIRECTORY = '/img/community/';

	const { title, description, image } = community[activeSlide];
	const firstBtn = community[0].hashBtn;
	const secondBtn = community[1].hashBtn;

	const handleSwitchSlide = i => {
		setActiveSlide(i);
	};

	return (
		<section className={s.section}>
			<Container>
				<h2>Експертна спільнота</h2>
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

export default Community;
