import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Speakers from '../components/Speakers/Speakers';
import WhoBenefits from '../components/WhoBenefits/WhoBenefits';
import './App.css';

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Hero />
				<WhoBenefits />
				<Speakers />
			</main>
			<Footer />
		</>
	);
}

export default App;
