import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom"
import s from './Pagination.module.scss';
import cn from "classnames";
import { setPage } from "../../features/goodsSlice";


export const Pagination = () => {
	const pathname = useLocation().pathname;
	const { page, pages } = useSelector(state => state.goods);
	const dispatch = useDispatch();

	const handlePageChange = (newPage => {
		dispatch(setPage(newPage))
	});

	const handlePrevPage = () => {
		if(page > 1) {
			handlePageChange(page - 1)
		}
	};

	const handleNextPage = () => {
		if(page < pages) {
			handlePageChange(page + 1)
		}
	};

	const renderPaginationItems = () => {
		const paginationItems = [];

		let startPage = Math.max(1, page - 1);
		let endPage = Math.min(startPage + 2, pages);

		for (let i = startPage ; i <= endPage; i++){
			paginationItems.push(
				<li key={i}>
					<NavLink
					to={`${pathname}?page=${i}`}
					className={cn(s.link, i ===  +page ?? s.linkActive)}
					onClick={() => handlePageChange(i)}
					>{i}</NavLink>
				</li>
			)
		}
		return paginationItems;
	}

	return (
		<div className={s.pagination}>
			<button
				className={s.arrow}
				onClick={handlePrevPage}
				disabled={page <= 2}
			>
				<svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5 7.06L1.90958 4L5 0.94L4.04858 0L-1.19209e-07 4L4.04858 8L5 7.06Z" fill="black"/>
				</svg>
			</button>
			<ul className={s.list}>
				{renderPaginationItems()}
			</ul>
			<button
				className={s.arrow}
				onClick={handleNextPage}
				disabled={page >= pages - 1 || pages <= 3}
			>
				<svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 7.06L3.09042 4L0 0.94L0.951417 0L5 4L0.951417 8L0 7.06Z" fill="black"/>
				</svg>
			</button>
		</div>
	)
}