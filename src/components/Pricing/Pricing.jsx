import Container from '../Container/Container';
import s from './Pricing.module.css';
import PricingItem from './PricingItem/PricingItem';
import { pricing } from '../../assets/data/mocData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Pricing = () => {
	return (
		<section className={s.section}>
			<Container>
				<h2 className={s.title}>Тарифи навчання</h2>
				<ul className={s.wrapper}>
					<Swiper
						spaceBetween={20}
						slidesPerView={'auto'}
						navigation
						pagination={{ clickable: true }}
						modules={[Navigation, Pagination]}
						centeredSlides={true}
						initialSlide={1}
					>
						{pricing.map((el, i) => {
							const activeEl = i === 1;
							return (
								<SwiperSlide key={i} style={{ maxWidth: '342px' }}>
									<PricingItem data={el} active={activeEl} />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</ul>
			</Container>
		</section>
	);
};

export default Pricing;
