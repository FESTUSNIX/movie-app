'use client'

import { useEffect, useRef } from 'react'

const usePrevious = (value: any, initialValue?: any) => {
	const ref: typeof value = useRef(initialValue ?? undefined)
	useEffect(() => {
		ref.current = value
	})
	return ref.current
}

export default usePrevious
