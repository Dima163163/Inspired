
import s from '../Color/Color.module.scss'

export const Color = ({ color, check }) => {
	const container = {
		'background-color': color
	}

	return (
		<li className={s.color} style={container} checked={check}>
			
		</li>
	)
}