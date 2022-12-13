import { FC } from 'react'

import Button from 'components/ui/Button/Button'

import styles from './Main.module.scss'

const Main: FC = () => {
	return (
		<div className={styles.main}>
			Main
			<Button />
		</div>
	)
}

export default Main
