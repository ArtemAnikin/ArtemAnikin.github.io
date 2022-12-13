export const stringFormatter = (price: string): string => {
	return price
		.replace(/[^.\d]+/g, '')
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
		.replace(/^([^.]*\.)|\./g, '$1')
}

export const validatePrice = (stringValue: string): string => {
	if (stringValue && /^[^.]*$/.test(stringValue)) {
		return stringValue + '.00'
	} else if (/^\d+\.\d$/.test(stringValue)) {
		return stringValue + '0'
	} else if (/^\d+(\.\d{1,2})?$/.test(stringValue)) {
		return stringValue
	} else {
		const result = Number(stringValue.replaceAll(',', ''))
		return stringFormatter(result.toFixed(2))
	}
}
