import React, { FC, memo, useEffect, useState } from 'react'

import {
	priceToNumber,
	stringToPriceFormatter,
	validatePrice
} from 'helpers/priceFormatter'

import dollar from 'assets/dollar-sign.svg'

import styles from './Amount.module.scss'

export interface IAmountProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	value: number
	label: string
	onChangeValue: (value: number) => void
}

const Amount: FC<IAmountProps> = ({
	value,
	onChangeValue,
	label,
	...props
}) => {
	const [stringValue, setStringValue] = useState(String(value))

	useEffect(() => {
		onBlur()
	}, [])

	const onBlur = (): void => {
		setStringValue(validatePrice(stringValue))
	}

	const changeValue = (event: any): void => {
		const rez = event.target.value

		if (/^\d+(\.?)+(\d{1,2})?$/.test(String(priceToNumber(rez)))) {
			setStringValue(stringToPriceFormatter(rez))
			onChangeValue(priceToNumber(rez))
		}
	}

	return (
		<>
			<div className={styles.title}>{label}</div>
			<div className={styles.wrapper} data-testid='amount'>
				<img src={dollar} alt='' data-testid='amount-currency-symbol-USD' />
				<input
					onBlur={onBlur}
					className={styles.input}
					{...props}
					type='text'
					data-testid='amount-input'
					placeholder='0.00'
					onChange={event => changeValue(event)}
					value={stringValue}
				/>
			</div>
		</>
	)
}

export default memo(Amount)
