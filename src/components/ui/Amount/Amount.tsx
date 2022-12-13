import React, { FC, memo, useEffect, useState } from 'react'

import { stringFormatter, validatePrice } from 'helpers/priceFormatter'

import dollar from 'assets/dollar-sign.svg'

import styles from './Amount.module.scss'

export interface IAmountProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	value: number
	onChangeValue: (value: number) => void
}

const Amount: FC<IAmountProps> = ({ value, onChangeValue, ...props }) => {
	const [stringValue, setStringValue] = useState(String(value))

	useEffect(() => {
		onBlur()
	}, [])

	const onBlur = () => {
		setStringValue(validatePrice(stringValue))
	}

	const changeValue = (event: any) => {
		const rez = event.target.value

		setStringValue(stringFormatter(rez))
		onChangeValue(+rez.replaceAll(',', ''))
	}

	return (
		<>
			<div className={styles.title}>Total amount</div>
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
