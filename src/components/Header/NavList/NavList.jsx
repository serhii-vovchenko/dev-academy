import s from './NavLink.module.css';
import { navigationLinks } from '../../../assets/data/mocData.js';
import { NavLink } from 'react-router-dom';

const NavList = ({ className }) => {
	return navigationLinks?.map(el => {
		return (
			<li key={el.slug} className={className === 'mobile' ? s.mobile : s.desktop}>
				<NavLink to={el.slug}>{el.name}</NavLink>
			</li>
		);
	});
};

export default NavList;
