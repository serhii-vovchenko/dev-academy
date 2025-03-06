import s from './TextForm.module.css';

const TextForm = ({ title, description }) => {
	return (
		<div className={s.wrapper}>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};

export default TextForm;
