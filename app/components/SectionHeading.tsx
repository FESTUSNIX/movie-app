import React from 'react'

type Props = {
	children: React.ReactNode
	className?: string
}

export const SectionHeading = ({ children, className }: Props) => {
	return <h2 className={`mb-3 font-montserrat text-xl font-semibold ${className}`}>{children}</h2>
}
