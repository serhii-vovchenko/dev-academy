import s from './StudentsCases.module.css';

import { useState } from 'react';
import { studentsCase } from '../../assets/data/mocData';
import Container from '../Container/Container';
import CardSwitcher from '../CardSwitcher/CardSwitcher';
import TextForm from '../TextForm/TextForm';
import HashButtons from '../HashButtons/HashButtons';
import ImageBox from '../ImageBox/ImageBox';

const StudentsCases = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [currentCourse, setCurrentCourse] = useState(0);

	const STUDENTS_PHOTO_DIRECTORY = '/img/students/';

	const courses = studentsCase[currentSlide]?.courses;
	const title = studentsCase?.[currentSlide]?.courses?.[currentCourse].course;
	const description = studentsCase?.[currentSlide]?.courses?.[currentCourse].description;
	const imageLink = `${STUDENTS_PHOTO_DIRECTORY}${studentsCase[currentSlide].image}`;

	const handleNextSlide = () => {
		if (currentSlide === studentsCase.length - 1) {
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
				<h2 className={s.title}>Кейси учнів</h2>
				<div className={s.wrapper}>
					<ImageBox link={imageLink} size={{ w: '313', h: '350' }} alt={'student photo'} />
					<div>
						<TextForm title={title} description={description} />
						<div className={s.hashGroup}>
							<HashButtons data={courses} active={currentCourse} handleSlide={handleCurrentSlide} />
							<CardSwitcher
								current={currentSlide + 1}
								last={studentsCase.length}
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

export default StudentsCases;
