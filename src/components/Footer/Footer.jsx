import s from './Footer.module.css';
import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className={s.footer}>
			<Container>
				<div className={s.wrapper}>
					<div className={s.logoWrapper}>
						<Logo position={'footer'} />
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus facere </p>
					</div>

					<div className={s.contactsWrapper}>
						<div className={s.addressWrapper}>
							<h3>Contact Information</h3>
							<address>
								<ul>
									<li>
										<a className={s.addressLink} href="mailto:example@support.com">
											example@support.com
										</a>
									</li>
									<li>
										<a className={s.addressLink} href="#">
											5 xyz st., adc, vallhalla
										</a>
									</li>
								</ul>
							</address>
						</div>
						<nav>
							<ul className={s.privacyList}>
								<li>
									<NavLink className={s.privacy} to={'#'}>
										Terms of Use
									</NavLink>
								</li>
								<li>
									<NavLink className={s.privacy} to={'#'}>
										Privacy Policy
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>
					<p className={s.copyright}>© 2024 Created by: Martin</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
