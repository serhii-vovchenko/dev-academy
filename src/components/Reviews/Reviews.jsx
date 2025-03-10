import s from './Reviews.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { reviews } from '../../assets/data/mocData';
import Container from '../Container/Container';

const Reviews = () => {
	return (
		<section className={s.section}>
			<Container>
				<h2 className={s.title}>Відгуки</h2>
				<ul className={s.wrapper}>
					<Swiper
						className="swiper-reviews"
						spaceBetween={40}
						slidesPerView={'auto'}
						navigation
						pagination={{ clickable: true }}
						modules={[Navigation, Pagination]}
						centeredSlides={true}
						initialSlide={1}
					>
						{reviews.map((el, i) => {
							return (
								<SwiperSlide className="custom-slide" key={i} style={{ maxWidth: '342px' }}>
									<li className={s.item}>
										<p className={s.description}>{el.review}</p>
										<p className={s.author}>{el.author}</p>
										<p className={s.role}>{el.role}</p>
									</li>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</ul>
			</Container>
		</section>
	);
};

export default Reviews;
