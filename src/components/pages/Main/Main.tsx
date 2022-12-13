import { FC } from 'react'

import styles from './Main.module.scss'

const Main: FC = () => {
	return (
		<>
			<div className={styles.wrapper} data-testid='Home-wrapper'>
				<div className={styles.title}>
					Let&apos;s plan your <strong> saving goal.</strong>
				</div>
			</div>
		</>
	)
}

export default Main
