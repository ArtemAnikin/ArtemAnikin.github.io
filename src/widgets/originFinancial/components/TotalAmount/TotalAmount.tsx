import { FC } from 'react'

import { getCurrentDate } from 'helpers/getCurrentDate'
import { monthFormatter } from 'helpers/monthFormatter'
import { numberToPriceFormatter } from 'helpers/priceFormatter'

import styles from './TotalAmount.module.scss'

interface ITotalProps {
	currentPrice: number
	numberOfMonth: number
}

const TotalAmount: FC<ITotalProps> = ({ currentPrice, numberOfMonth }) => {
	const { currentMonth, currentYear } = getCurrentDate()

	const month = (currentMonth + numberOfMonth) % 12

	const year = currentYear + Math.trunc((currentMonth - 1 + numberOfMonth) / 12)

	const price = currentPrice / (numberOfMonth + 1)

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.title}>Monthly amount</div>
				<div className={styles.price}>{numberToPriceFormatter(price)}</div>
			</div>
			<div className={styles.info}>
				You’re planning <strong> {numberOfMonth} monthly deposits </strong> to
				reach your
				<strong> {numberToPriceFormatter(currentPrice)} </strong> goal by
				<strong>
					{' '}
					{monthFormatter(month)} {year}
				</strong>
			</div>
		</div>
	)
}

export default TotalAmount
