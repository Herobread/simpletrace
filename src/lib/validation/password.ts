import { RegisterOptions } from 'react-hook-form'

export const passwordValidationOptions: RegisterOptions = {
	required: 'This field is required.',
	validate: (value) => {
		let mistakes = []

		// if (!/(?=.*[A-Z])/.test(value)) {
		// 	mistakes.push('uppercase letter')
		// }

		if (!/(?=.*\d)/.test(value)) {
			mistakes.push('number')
		}

		// if (!/[^A-Za-z0-9]/.test(value)) {
		// 	mistakes.push('special character')
		// }

		if (value.length < 6) {
			mistakes.push('be 6 characters long')
		}

		// If there are any mistakes, return the array of error messages
		if (mistakes.length > 0) {
			return 'Your password must include: ' + mistakes.join(', ')
		}

		// If all requirements are met, return true (no error)
		return true
	},
}
