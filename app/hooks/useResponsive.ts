'use client'

import { useMediaQuery } from 'react-responsive'

const breakpoints: { [key: string]: number } = {
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1280,
	xxl: 1600
}

const useResponsive = () => {
	const isXS = useMediaQuery({ maxWidth: breakpoints.sm })
	const isSM = useMediaQuery({ minWidth: breakpoints.sm })
	const isMD = useMediaQuery({ minWidth: breakpoints.md })
	const isLG = useMediaQuery({ minWidth: breakpoints.lg })
	const isXL = useMediaQuery({ minWidth: breakpoints.xl })
	const isXXL = useMediaQuery({ minWidth: breakpoints.xxl })

	return { isXS, isSM, isMD, isLG, isXL, isXXL }
}

export default useResponsive
