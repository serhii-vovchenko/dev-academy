import s from './Header.module.css';

import React, { useState } from 'react';
import NavList from './NavList/NavList';
import MobileMenu from './MobileMenu/MobileMenu';
import Logo from '../Logo/Logo';
import Container from '../Container/Container';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
	const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuIsOpen(!mobileMenuIsOpen);
	};

	return (
		<>
			<header className={s.header}>
				<Container>
					<div className={s.mobileHeader}>
						<Logo />
						<button type="button" className={s.burgerBtn} onClick={toggleMobileMenu}>
							<RxHamburgerMenu color="white" size="20" />
						</button>
					</div>
					<nav className={s.navigation}>
						<ul className={s.navList}>
							<NavList className="desktop" />
						</ul>
					</nav>
				</Container>
			</header>
			{mobileMenuIsOpen && <MobileMenu closeMenu={toggleMobileMenu} />}
		</>
	);
};

export default Header;
