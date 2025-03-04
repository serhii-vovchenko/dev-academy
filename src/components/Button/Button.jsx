import s from './Button.module.css';

const Button = ({ type, style, children }) => {
	return (
		<button
			className={
				style === 'register'
					? s.register
					: style === 'choose'
					? s.choose
					: style === 'send'
					? s.send
					: style === 'view'
					? s.view
					: ''
			}
			type={type}
		>
			{children}
		</button>
	);
};

export default Button;
