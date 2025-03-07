import s from './MobileMenu.module.css';
import React from 'react';
import Logo from '../../Logo/Logo';
import NavList from '../NavList/NavList';
import { IoIosClose } from 'react-icons/io';

const MobileMenu = ({ closeMenu }) => {
	const closeMobMenu = e => {
		if (e.target === e.currentTarget) {
			return closeMenu();
		}
		return;
	};

	return (
		<div className={s.overlay} onClick={e => closeMobMenu(e)}>
			<button type="button" className={s.closeBtn} onClick={closeMenu}>
				<IoIosClose color="white" size="20" />
			</button>
			<div className={s.wrapper}>
				<Logo position={'mobile'} />
				<nav>
					<ul className={s.navList}>
						<NavList className="mobile" />
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default MobileMenu;
