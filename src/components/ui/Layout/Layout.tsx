import React, { FC } from 'react'
import Header from './Header/Header'

import styles from './Layout.module.scss'

interface ILayoutProps {
	children: React.ReactNode
}

const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			{children}
		</div>
	)
}

export default Layout
