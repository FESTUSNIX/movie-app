'use client'

import { useContext } from 'react'
import { LightboxContext } from '../context/LightboxContext'

export const useLightboxContext = () => {
	const context = useContext(LightboxContext)

	if (!context) {
		throw Error('useLightboxContext must be used inside an LightboxProvider')
	}

	return context
}
