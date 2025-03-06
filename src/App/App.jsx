import './App.css';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Speakers from '../components/Speakers/Speakers';
import WhoBenefits from '../components/WhoBenefits/WhoBenefits';
import { speakers, studentsCase } from '../assets/data/mocData';
import HowItWorks from '../components/HowItWorks/HowItWorks';

function App() {
	const SPEAKERS_PHOTO_DIRECTORY = '/img/speakers/';
	const STUDENTS_PHOTO_DIRECTORY = '/img/students/';

	return (
		<>
			<Header />
			<main className="main">
				<Hero />
				<WhoBenefits />
				<Speakers
					title={'Спікери курсу'}
					data={speakers}
					photoDirectory={SPEAKERS_PHOTO_DIRECTORY}
				/>
				<HowItWorks />
				<Speakers
					title={'Кейси учнів'}
					data={studentsCase}
					photoDirectory={STUDENTS_PHOTO_DIRECTORY}
				/>
			</main>
			<Footer />
		</>
	);
}

export default App;
