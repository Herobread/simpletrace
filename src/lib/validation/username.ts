import { RegisterOptions } from 'react-hook-form'

export const usernameValidationOptions: RegisterOptions = {
	required: 'This field is required.',
	minLength: {
		value: 3,
		message: 'Username must be longer than 3 symbols',
	},
	maxLength: {
		value: 30,
		message: 'Username can not be longer than 30 symbols',
	},
}
