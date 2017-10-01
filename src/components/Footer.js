import React from 'react'
import styles from './Footer.css'
import pathToRegexp from 'path-to-regexp'
import {
	Link
} from 'dva/router'

const Footer = ({}) => {
	const {
		pathname,
		query
	} = location

	const enteractive = pathToRegexp(`/active`).test(pathname)

	return (
		<div style={{textAlign:'center'}}>
			<footer className={styles.footer}>
				<span style={{float:'left'}}>num items left</span>
				<ul className={styles.selected}>
				  <li><Link to = {'/'}>All</Link></li>
				  <li><Link to = {'/active'}>Active</Link></li>
				  <li><Link to = {'/completed'}>Completed</Link></li>
			 	</ul>
			 	<button className={styles.button}>clear completed</button>
			</footer>
	   </div>
	)
}

export default Footer