import { RegisterOptions } from 'react-hook-form'

export const projectNameValidationOptions: RegisterOptions = {
	required: 'This field is required.',
	minLength: {
		value: 3,
		message: 'Project name must be longer than 3 symbols',
	},
	maxLength: {
		value: 120,
		message: 'Project name can not be longer than 120 symbols',
	},
}
