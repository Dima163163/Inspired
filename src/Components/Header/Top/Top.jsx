import { Container } from "../../Layout/Container/Container";
import style from './Top.module.scss'

export const Top = () => (
	<div className="top">
		<Container text='Привет' className='header__container'>
			<p>телефон</p>
			<p>логотип</p>
			<p>иконочки</p>
		</Container>
	</div>
)