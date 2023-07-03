import cn from 'classnames';
import style from './Container.module.scss'
console.log(style)

export const Container = (props) => (
	<div className={cn('container', props.className)}>{props.children}</div>
)