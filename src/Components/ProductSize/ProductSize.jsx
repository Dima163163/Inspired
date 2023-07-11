import s from './ProductSize.module.scss';

export const ProductSize = ({ size }) => (
	<ul className={s.list}>
		{size?.map( i => {
				return <li className={s.item} key={size} size={size}>{i}</li>
			}
		)}
	</ul>

)