import { RegisterOptions } from 'react-hook-form'

export const passwordValidationOptions: RegisterOptions = {
	required: 'This field is required.',
	minLength: {
		value: 8,
		message: 'Your password must be at least 8 characters long',
	},
	validate: (value) => {
		let mistakes = []

		if (!/(?=.*[A-Z])/.test(value)) {
			mistakes.push('uppercase letter')
		}

		if (!/(?=.*\d)/.test(value)) {
			mistakes.push('number')
		}

		if (!/[^A-Za-z0-9]/.test(value)) {
			mistakes.push('special character')
		}

		// If there are any mistakes, return the array of error messages
		if (mistakes.length > 0) {
			return 'Your password must include: ' + mistakes.join(', ')
		}

		// If all requirements are met, return true (no error)
		return true
	},
}
