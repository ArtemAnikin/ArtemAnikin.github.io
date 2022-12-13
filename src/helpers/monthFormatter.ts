import moment from 'moment'

export const monthFormatter = (month: number): string => {
	month = month === 0 ? 12 : month
	const d = new Date(`${month}`)
	return moment(d).format('MMMM')
}
