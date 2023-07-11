import s from './ProductSize.module.scss';

export const ProductSize = ({ size }) => (
	<div className={s.size}>
		<h2 className={s.title}>Размер</h2>
		<ul className={s.list}>
			{size?.map( i => {
					return <li className={s.item} key={size} size={size}>{i}</li>
				}
			)}
		</ul>
	</div>
)