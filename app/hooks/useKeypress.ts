import { useCallback, useEffect } from 'react'

export default function useKeypress(key: string, action: () => void) {
	const onKeyup = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === key) {
				action()
			}
		},
		[action, key]
	)

	useEffect(() => {
		window.addEventListener('keyup', onKeyup)
		return () => window.removeEventListener('keyup', onKeyup)
	}, [onKeyup])
}
