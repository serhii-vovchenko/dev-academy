import Container from '../Container/Container';
import s from './Speakers.module.css';
import { useState } from 'react';
import CardSwitcher from '../CardSwitcher/CardSwitcher';

const Speakers = ({ title, data, photoDirectory }) => {
	const [currentTeacher, setCurrentTeacher] = useState(0);
	const [currentSubject, setCurrentSubject] = useState(0);
	const subjects = data[currentTeacher]?.subjects;

	const handleNextTeacher = () => {
		if (currentTeacher === data.length - 1) {
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
				<h2 className={s.title}>{title}</h2>
				<div className={s.wrapper}>
					<div className={s.imgContainer}>
						<img
							src={`${photoDirectory}${data[currentTeacher].image}`}
							alt="Teacher photo"
							width="313"
							height="350"
						/>
					</div>
					<div className={s.descWrap}>
						<div className={s.description}>
							<h3>{data?.[currentTeacher]?.subjects?.[currentSubject].subject}</h3>
							<p>{data?.[currentTeacher]?.subjects?.[currentSubject].description}</p>
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
								last={data.length}
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
