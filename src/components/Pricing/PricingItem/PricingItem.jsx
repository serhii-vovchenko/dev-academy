import clsx from 'clsx';
import Button from '../../Button/Button';
import s from './PricingItem.module.css';

const PricingItem = ({ data, active }) => {
	const {
		title,
		description,
		partsPriceInfo,
		partsPriceSales,
		partsOldPrice,
		priceInfo,
		salesPrice,
		oldPrice,
		details,
	} = data;

	return (
		<li className={clsx(s.wrapper, active && s.activeWrapper)}>
			<h3 className={s.title}>{title}</h3>
			<p className={s.text}>{description}</p>

			<div className={clsx(s.priceContainer, active && s.activePriceContainer)}>
				<div className={s.partsPrice}>
					<p className={s.info}>{partsPriceInfo}</p>
					<p className={s.sales}>
						<span>{partsPriceSales}</span> /місяць
					</p>
					<p className={s.oldPrice}>
						<span>{partsOldPrice}</span> на 24 місяці
					</p>
				</div>

				<div className={s.price}>
					<p className={s.info}>{priceInfo}</p>
					<p className={s.salesPrice}>{salesPrice}</p>
					<p className={s.originPrice}>{oldPrice}</p>
				</div>
			</div>

			<ul className={clsx(s.detailsList, active && s.activeDetailList)}>
				{details.map((item, i) => {
					return (
						<li key={i} className={s.detailsItem}>
							{item}
						</li>
					);
				})}
			</ul>

			<Button type={'button'} style={'choose'}>
				Вибрати
			</Button>
		</li>
	);
};

export default PricingItem;
