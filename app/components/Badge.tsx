import React from 'react'

type Props = {
	children: React.ReactNode
	className?: string
}

const Badge = ({ children, className }: Props) => {
	return (
		<div className={`inline-block max-w-max rounded-md bg-white/5 px-2.5 py-2 backdrop-blur-sm ${className}`}>
			{children}
		</div>
	)
}

export default Badge
