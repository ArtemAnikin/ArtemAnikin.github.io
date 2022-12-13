import { FC } from 'react'

import logo from 'assets/logo.svg'

import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<img src={logo} alt='logo' />
		</div>
	)
}

export default Header
