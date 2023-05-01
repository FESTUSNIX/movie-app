import React from 'react'

type Props = {
	children: string
	className?: string
}

const ErrorDisplay = ({ children, className }: Props) => {
	return (
		<div
			className={`my-2 inline-block rounded-md border-2 border-red-700 bg-red-200 py-2 px-4 text-red-700 ${className}`}>
			{children}
		</div>
	)
}

export default ErrorDisplay
