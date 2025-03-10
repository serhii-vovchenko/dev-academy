import s from './Speakers.module.css';

import { useState } from 'react';
import { speakers } from '../../assets/data/mocData';
import Container from '../Container/Container';
import CardSwitcher from '../CardSwitcher/CardSwitcher';
import TextForm from '../TextForm/TextForm';
import HashButtons from '../HashButtons/HashButtons';
import ImageBox from '../ImageBox/ImageBox';

const Speakers = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [currentCourse, setCurrentCourse] = useState(0);

	const SPEAKERS_PHOTO_DIRECTORY = '/img/speakers/';

	const courses = speakers[currentSlide]?.courses;
	const title = speakers?.[currentSlide]?.courses?.[currentCourse].course;
	const description = speakers?.[currentSlide]?.courses?.[currentCourse].description;
	const imageLink = `${SPEAKERS_PHOTO_DIRECTORY}${speakers[currentSlide].image}`;

	const handleNextSlide = () => {
		if (currentSlide === speakers.length - 1) {
			return;
		}
		setCurrentSlide(prev => prev + 1);
	};

	const handleLastSlide = () => {
		if (currentSlide === 0) {
			return;
		}
		setCurrentSlide(prev => prev - 1);
	};

	const handleCurrentSlide = i => {
		setCurrentCourse(i);
	};

	return (
		<section className={s.section}>
			<Container>
				<h2 className={s.title}>Спікери курсу</h2>
				<div className={s.wrapper}>
					<ImageBox link={imageLink} size={{ w: '313', h: '350' }} alt={'teacher photo'} />
					<div>
						<TextForm title={title} description={description} />
						<div className={s.hashGroup}>
							<HashButtons data={courses} active={currentCourse} handleSlide={handleCurrentSlide} />
							<CardSwitcher
								current={currentSlide + 1}
								last={speakers.length}
								previous={handleLastSlide}
								next={handleNextSlide}
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Speakers;
