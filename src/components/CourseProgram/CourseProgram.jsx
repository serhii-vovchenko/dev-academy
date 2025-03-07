import s from './CourseProgram.module.css';

import { useState } from 'react';
import { courseProgram } from '../../assets/data/mocData';
import Container from '../Container/Container';
import CardSwitcher from '../CardSwitcher/CardSwitcher';
import TextForm from '../TextForm/TextForm';
import HashButtons from '../HashButtons/HashButtons';
import ImageBox from '../ImageBox/ImageBox';
import CoursePicker from '../CoursePicker/CoursePicker';

const CourseProgram = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [currentCourse, setCurrentCourse] = useState(0);

	const STUDENTS_PHOTO_DIRECTORY = '/img/course-program/';

	const courses = courseProgram[currentSlide]?.courses;
	const title = courseProgram?.[currentSlide]?.courses?.[currentCourse].course;
	const description = courseProgram?.[currentSlide]?.courses?.[currentCourse].description;
	const imageLink = `${STUDENTS_PHOTO_DIRECTORY}${courseProgram[currentSlide].image}`;

	const handleNextSlide = () => {
		if (currentSlide === courseProgram.length - 1) {
			return;
		}
		setCurrentSlide(currentSlide + 1);
	};

	const handleLastSlide = () => {
		if (currentSlide === 0) {
			return;
		}
		setCurrentSlide(currentSlide - 1);
	};

	const handleCurrentSlide = i => {
		setCurrentCourse(i);
	};

	return (
		<section className={s.section}>
			<Container>
				<h2 className={s.title}>Програма курсу</h2>
				<div className={s.wrapper}>
					<ImageBox link={imageLink} size={{ w: '313', h: '350' }} alt={'student photo'} />
					<div>
						<TextForm title={title} description={description} />
						<CoursePicker />
						<div className={s.hashGroup}>
							<HashButtons data={courses} active={currentCourse} handleSlide={handleCurrentSlide} />

							<CardSwitcher
								current={currentSlide + 1}
								last={courseProgram.length}
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

export default CourseProgram;
