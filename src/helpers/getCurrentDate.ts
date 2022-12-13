export const getCurrentDate = () => {
	const today = new Date()
	const currentMonth = today.getMonth() + 1 //January is 0!
	const currentYear = today.getFullYear()

	return {
		currentMonth,
		currentYear
	}
}
