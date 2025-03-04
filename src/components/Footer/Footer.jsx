import s from './Footer.module.css';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className={s.footer}>
			<Container>
				<Logo />
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus facere </p>

				<div>
					<h3>Contact Information</h3>
					<address>
						<ul>
							<li>
								<a href="mailto:example@support.com">example@support.com</a>
							</li>
							<li>
								<a href="#">5 xyz st., adc, vallhalla</a>
							</li>
						</ul>
					</address>
				</div>
				<nav>
					<ul>
						<li>
							<NavLink to={'#'}>Terms of Use</NavLink>
						</li>
						<li>
							<NavLink to={'#'}>Privacy Policy</NavLink>
						</li>
					</ul>
				</nav>
				<p>© 2024 Created by: Martin</p>
			</Container>
		</footer>
	);
};

export default Footer;
