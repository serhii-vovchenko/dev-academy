import { useState } from 'react';
import s from './CoursePicker.module.css';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import { FiPlus } from 'react-icons/fi';
import { courses } from '../../assets/data/mocData';

const CoursePicker = ({ current, last, previous, next }) => {
	const [programListIsOpen, setProgramListIsOpen] = useState(false);

	const toggleProgramList = () => {
		setProgramListIsOpen(!programListIsOpen);
	};

	return (
		<div className={s.wrapper}>
			<span>{current}</span>

			<div className={s.btnBox}>
				<button onClick={previous}>
					<CgChevronLeft color="white" size="16" />
				</button>

				<button>
					<FiPlus onClick={toggleProgramList} color="white" size="16" />
				</button>

				<button onClick={next}>
					<CgChevronRight color="white" size="16" />
				</button>
			</div>

			<span>{last}</span>
			{programListIsOpen && (
				<div className={s.programList}>
					<ul className={s.list}>
						{courses?.map((el, i) => {
							return (
								<li key={i} className={s.item}>
									<h4>{el.title}</h4>
									<p className={s.text}>{el.description}</p>
									<p className={s.subtitle}>{el.subtitle}</p>
									<ul>
										{el.courses?.map((item, i) => {
											return <li key={i}>{item}</li>;
										})}
									</ul>
								</li>
							);
						})}
					</ul>
					<button onClick={toggleProgramList}>Згорнути</button>
				</div>
			)}
		</div>
	);
};

export default CoursePicker;
