import Container from '../Container/Container';
import s from './Speakers.module.css';
import { speakers } from '../../assets/data/mocData';
import { useState } from 'react';
import CardSwitcher from '../CardSwitcher/CardSwitcher';

const Speakers = () => {
	const PHOTO_DIRECTORY = '/img/speakers/';

	const [currentTeacher, setCurrentTeacher] = useState(0);
	const [currentSubject, setCurrentSubject] = useState(0);
	const subjects = speakers[currentTeacher]?.subjects;

	const handleNextTeacher = () => {
		if (currentTeacher === speakers.length - 1) {
			return;
		}
		setCurrentTeacher(currentTeacher + 1);
	};

	const handlePreviousTeacher = () => {
		if (currentTeacher === 0) {
			return;
		}
		setCurrentTeacher(currentTeacher - 1);
	};

	const handleCurrentSubject = i => {
		setCurrentSubject(i);
	};

	return (
		<section className={s.section}>
			<Container>
				<h2 className={s.title}>Спікери курсу</h2>
				<div className={s.wrapper}>
					<div className={s.imgContainer}>
						<img
							src={`${PHOTO_DIRECTORY}${speakers[currentTeacher].image}`}
							alt="Teacher photo"
							width="313"
							height="350"
						/>
					</div>
					<div className={s.descWrap}>
						<div className={s.description}>
							<h3>{speakers?.[currentTeacher]?.subjects?.[currentSubject].subject}</h3>
							<p>{speakers?.[currentTeacher]?.subjects?.[currentSubject].description}</p>
						</div>
						<div className={s.subjects}>
							<ul className={s.subList}>
								{subjects.map((el, i) => {
									return (
										<li
											className={i === currentSubject ? s.activeItem : s.subItem}
											onClick={() => handleCurrentSubject(i)}
											key={i}
										>
											{el.subject}
										</li>
									);
								})}
							</ul>
							<CardSwitcher
								current={currentTeacher + 1}
								last={speakers.length}
								previous={handlePreviousTeacher}
								next={handleNextTeacher}
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Speakers;
