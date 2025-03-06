import s from './ImageBox.module.css';

const ImageBox = ({ link, size, alt }) => {
	return (
		<div className={s.wrapper}>
			<img src={link} alt={alt} width={size.w} height={size.h} />
		</div>
	);
};

export default ImageBox;
