export const formatMinutes = (minutes: number) => {
	const min = minutes % 60
	const hr = (minutes - min) / 60

	const formated = (hr !== 0 ? `${hr}	HR ` : '') + (min !== 0 ? `${min} MIN` : '')

	return formated
}
