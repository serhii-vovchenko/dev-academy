import s from './Logo.module.css';

const Logo = ({ color }) => {
	return (
		<div className={s.wrapper}>
			<div className={s.logoImg}>
				<div className={s.first}></div>
				<div className={s.second}></div>
			</div>
			<span className={color === 'black' ? s.blackLogo : s.whiteLogo}>Logo</span>
		</div>
	);
};

export default Logo;
