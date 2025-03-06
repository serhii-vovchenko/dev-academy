import Button from '../Button/Button';
import CardSwitcher from '../CardSwitcher/CardSwitcher';
import Container from '../Container/Container';
import s from './HowItWorks.module.css';
import { howItWorks } from '../../assets/data/mocData';
import { useState } from 'react';

const HowItWorks = () => {
	const [currentPost, setCurrentPost] = useState(0);
	const PHOTO_DIRECTORY = '/img/how-it-works/';

	const handleNextPost = () => {
		if (currentPost === howItWorks.length - 1) {
			return;
		}
		setCurrentPost(currentPost + 1);
	};

	const handlePreviousPost = () => {
		if (currentPost === 0) {
			return;
		}
		setCurrentPost(currentPost - 1);
	};

	return (
		<section className={s.section}>
			<Container>
				<h2 className={s.title}>Як проходить навчання</h2>
				<div className={s.wrapper}>
					<div className={s.firstContainer}>
						<div className={s.imageWrapper}>
							<img
								src={`${PHOTO_DIRECTORY}${howItWorks[currentPost]?.image}`}
								alt="how it work"
								width="278"
								height="174"
							/>
						</div>
						<Button type={'button'} style={'view'}>
							Дивитись відео
						</Button>
					</div>
					<div className={s.secondContainer}>
						<h3>{howItWorks?.[currentPost]?.title}</h3>
						<p>{howItWorks?.[currentPost]?.text}</p>
						<CardSwitcher
							current={currentPost + 1}
							last={howItWorks.length}
							previous={handlePreviousPost}
							next={handleNextPost}
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default HowItWorks;
