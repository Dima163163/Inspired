import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const';
import { ReactComponent as Like } from '../../assets/heart.svg';
import { ColorList } from '../ColorList/ColorList';
import s from './Product.module.scss';

export const Product = ({id, pic, title, price, colors, description}) => (
	<article className={s.product}>
		<NavLink to={`/product/${id}`} className={s.link}>
			<img className={s.image} src={`${API_URL}${pic}`} alt={`${title} ${description}`} />
			<h3 className={s.title}>{title}</h3>
		</NavLink>
		<div className={s.row}>
			<p className={s.price}>
				{price} руб
			</p>
			<button className={s.favorite}>
				<Like />
			</button>
		</div>
		<ColorList colors={colors}/>
	</article>
);
