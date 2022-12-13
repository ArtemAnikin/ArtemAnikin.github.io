import React, { FC, useState } from 'react'

import { getCurrentDate } from 'helpers/getCurrentDate'
import { monthFormatter } from 'helpers/monthFormatter'

import styles from './ReachDate.module.scss'

export interface IReachDateProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
	changeNumberOfMonth: (month: number) => void
}

const ReachDate: FC<IReachDateProps> = ({ changeNumberOfMonth, label }) => {
	const { currentYear, currentMonth } = getCurrentDate()

	const [month, setMonth] = useState(currentMonth)
	const [year, setYear] = useState(currentYear)

	const handleMonthInc = () => {
		changeMonth(12, 1)
	}

	const handleMonthDec = () => {
		if (currentYear !== year || currentMonth !== month) {
			changeMonth(1, -1)
		}
	}

	const changeMonth = (condition: number, value: number) => {
		if (month === condition) {
			setYear(year + value)
			setMonth(condition === 12 ? 1 : 12)
		} else {
			setMonth(month + value)
		}
		changeNumberOfMonth(value)
	}

	return (
		<>
			<div className={styles.title}>{label}</div>
			<div className={styles.wrapper}>
				<div className={styles.date} data-testid='Reach-date'>
					<div className={styles.dateArrowLeft} onClick={handleMonthDec}></div>
					<div className={styles.month}>{monthFormatter(month)}</div>
					<div className={styles.year}>{year}</div>
					<div className={styles.dateArrowRight} onClick={handleMonthInc}></div>
				</div>
			</div>
		</>
	)
}

export default ReachDate
