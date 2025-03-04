import s from './Hero.module.css';
import Container from '../Container/Container';
import heroImage from '../../assets/img/hero/hero-img.png';
import iconsImg from '../../assets/img/hero/icons-image.png';
import Button from '../Button/Button';

const Hero = () => {
	return (
		<section className={s.section}>
			<Container>
				<div className={s.wrapper}>
					<div className={s.titleWrapper}>
						<h1 className={s.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
						<p className={s.heroText}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum
							tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!
						</p>
					</div>

					<img src={heroImage} className={s.image} alt="hero image" width="192" height="203" />

					<div className={s.lastWrapper}>
						<div className={s.imageWrapper}>
							<img src={iconsImg} alt="icons people" width="88" height="25" />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
						</div>

						<Button type="button" style={'register'}>
							Зареєструватися
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
