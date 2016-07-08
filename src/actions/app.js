import { CHECK_APP } from 'constants/actionTypes'

export function checkApp() {
	return {
		type: CHECK_APP,
		message: 'application is working!'
	};
}