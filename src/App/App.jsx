import './App.css';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Speakers from '../components/Speakers/Speakers';
import WhoBenefits from '../components/WhoBenefits/WhoBenefits';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import StudentsCases from '../components/StudentsCases/StudentsCases';

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
			</main>
			<Footer />
		</>
	);
}

export default App;
