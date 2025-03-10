import s from './Button.module.css';

const Button = ({ type, style, children }) => {
	const styleBtn =
		style === 'register'
			? s.register
			: style === 'choose'
			? s.choose
			: style === 'view'
			? s.view
			: '';

	return (
		<button className={styleBtn} type={type}>
			{children}
		</button>
	);
};

export default Button;
