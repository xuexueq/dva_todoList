import React from 'react'
import styles from './Footer.css'
import pathToRegexp from 'path-to-regexp'
import {
	Link
} from 'dva/router'

const Footer = ({
	list,
	onDeleteAllCompleted
}) => {
	const {
		pathname,
		query
	} = location

	const enteractive = pathToRegexp(`/active`).test(pathname)


	let activeItem = list.filter((value, index, array) => value.iscompleted === false)



	let clearButton
	if (list.length - activeItem.length) {
		clearButton = <button className={styles.button} onClick={onDeleteAllCompleted}>clear completed</button>
	}

	return (
		<div>
			<footer className={styles.footer}>
				<span style={{float:'left'}}>{activeItem.length} items left</span>
				<ul className={styles.selected}>
				  <li><Link to = {'/'}>All</Link></li>
				  <li><Link to = {'/active'}>Active</Link></li>
				  <li><Link to = {'/completed'}>Completed</Link></li>
			 	</ul>
				{clearButton}
			</footer>
	   </div>
	)
}

export default Footer