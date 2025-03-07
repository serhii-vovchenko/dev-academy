import s from './Logo.module.css';

const Logo = ({ position }) => {
	const style =
		position === 'header'
			? s.header
			: position === 'footer'
			? s.footer
			: position === 'mobile'
			? s.mobile
			: '';

	return (
		<div className={style}>
			<div className={s.logoContainer}>
				<div className={s.first}></div>
				<div className={s.second}></div>
			</div>
			<span className={s.logo}>DevAcademy</span>
		</div>
	);
};

export default Logo;
