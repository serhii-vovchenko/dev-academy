import './App.css';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Speakers from '../components/Speakers/Speakers';
import WhoBenefits from '../components/WhoBenefits/WhoBenefits';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import StudentsCases from '../components/StudentsCases/StudentsCases';
import CareerCenter from '../components/CareerCenter/CareerCenter';
import Community from '../components/Community/Community';
import Pricing from '../components/Pricing/Pricing';
import Contact from '../components/Contact/Contact';
import CourseProgram from '../components/CourseProgram/CourseProgram';

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Hero />
				<WhoBenefits />
				<Speakers />
				<HowItWorks />
				<StudentsCases />
				<CareerCenter />
				<CourseProgram />
				<Community />
				<Pricing />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export default App;
