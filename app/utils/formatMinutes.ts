export const formatMinutes = (minutes: number) => {
	const min = minutes % 60
	const hr = (minutes - min) / 60

	return `${hr}h ${min}m`
}
