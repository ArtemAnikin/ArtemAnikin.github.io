import { render } from '@testing-library/react'

import ReachDate, { IReachDateProps } from 'components/ui/ReachDate/ReachDate'

describe('ui->ReachDate', () => {
	const props: IReachDateProps = {
		label: 'Some label',
		changeNumberOfMonth: i => i
	}

	const renderComponent = () =>
		render(
			<ReachDate
				label={props.label}
				changeNumberOfMonth={props.changeNumberOfMonth}
			/>
		)
})
