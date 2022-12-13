import React, { FC } from 'react'

import styles from './Button.module.scss'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

const Button: FC<IButtonProps> = ({ children, ...props }) => {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	)
}

export default Button
