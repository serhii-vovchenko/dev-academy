import s from './MobileMenu.module.css';
// import close from '../../../assets/icons/map.svg';
import React from 'react';
import Logo from '../../Logo/Logo';
import NavList from '../NavList/NavList';

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
				{/* <svg className={s.svg}>
					<use href={close} />
				</svg> */}
				x
			</button>
			<div className={s.wrapper}>
				<Logo color={'black'} />
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
