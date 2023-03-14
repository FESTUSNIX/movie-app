'use client'

import { motion, AnimatePresence, useMotionValue } from 'framer-motion'
import usePrevious from '../hooks/usePrevious'
import useResponsive from '../hooks/useResponsive'

type VariantProps = {
	prevPage: number
	page: number
	vertical: boolean
}

type Props = {
	children: React.ReactNode
	page: number
	setPage: React.Dispatch<React.SetStateAction<number>>
	className?: string
	dataLength: number
	vertical?: boolean
}

const variants = {
	initialState: ({ prevPage, page, vertical }: VariantProps) => {
		const direction = vertical ? { y: prevPage > page ? '-100%' : '100%' } : { x: prevPage > page ? '-100%' : '100%' }

		return {
			...direction,
			transition: { duration: 0.3, ease: 'easeInOut' }
		}
	},
	animateState: ({ vertical }: VariantProps) => {
		const direction = vertical ? { y: 0 } : { x: 0 }

		return {
			...direction,
			transition: { duration: 0.3 }
		}
	},
	exitState: ({ prevPage, page, vertical }: VariantProps) => {
		const direction = vertical ? { y: prevPage > page ? '100%' : '-100%' } : { x: prevPage > page ? '100%' : '-100%' }

		return {
			...direction,
			transition: { ease: 'easeInOut' }
		}
	}
}

export const MotionSlider = ({ children, page, setPage, className, vertical, dataLength }: Props) => {
	const { isMD } = useResponsive()
	const prevPage = usePrevious(page)
	const motionVal = useMotionValue(0)

	const dragDistance = isMD ? 150 : 50

	const handleDrag = () => {
		if (motionVal.get() > dragDistance) {
			if (page === 0) return setPage(dataLength - 1)
			setPage(page - 1)
		}
		if (motionVal.get() < -dragDistance) {
			if (page === dataLength - 1) return setPage(0)
			setPage(page + 1)
		}
	}

	return (
		<AnimatePresence mode='wait' initial={false} custom={{ prevPage, page, vertical }}>
			<motion.div
				key={page}
				variants={variants}
				initial='initialState'
				animate='animateState'
				exit='exitState'
				custom={{ prevPage, page, vertical }}
				drag={vertical ? 'y' : 'x'}
				dragConstraints={vertical ? { top: 0, bottom: 0 } : { left: 0, right: 0 }}
				dragTransition={{ bounceStiffness: 600, bounceDamping: 22 }}
				style={vertical ? { y: motionVal } : { x: motionVal }}
				onDragEnd={() => handleDrag()}
				className={className}>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}
