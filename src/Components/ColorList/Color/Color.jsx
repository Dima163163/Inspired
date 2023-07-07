import s from '../Color/Color.module.scss'

export const Color = ({ color, check }) => {

	return (
		<li className={s.color} style={{'--data-color' : color}}></li>
	)
}