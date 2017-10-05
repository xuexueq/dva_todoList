import React from 'react'
import styles from './Footer.css'
import pathToRegexp from 'path-to-regexp'
import {
	Link
} from 'dva/router'

const Footer = ({
	list
}) => {
	const {
		pathname,
		query
	} = location

	const enteractive = pathToRegexp(`/active`).test(pathname)


	/*	let clearButton = list.filter(() => {
			value.iscompleted == true
		})*/

	return (
		<div>
			<footer className={styles.footer}>
				<span style={{float:'left'}}>num items left</span>
				<ul className={styles.selected}>
				  <li><Link to = {'/'}>All</Link></li>
				  <li><Link to = {'/active'}>Active</Link></li>
				  <li><Link to = {'/completed'}>Completed</Link></li>
			 	</ul>
	{ /*			 	{clearButton}*/ }
			</footer>
	   </div>
	)
}

export default Footer