import { RegisterOptions } from 'react-hook-form'

export const issueNameValidationOptions: RegisterOptions = {
	required: 'This field is required.',
	minLength: {
		value: 3,
		message: 'Issue name must be longer than 3 symbols',
	},
	maxLength: {
		value: 120,
		message: 'Issue name can not be longer than 120 symbols',
	},
}
