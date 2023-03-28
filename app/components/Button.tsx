import React from 'react'

type Props = {
	children: React.ReactNode
	secondary?: boolean
	styles?: string
}

export const Button = ({ children, secondary, styles = '' }: Props) => {
	return (
		<button
			className={`flex items-center gap-2 rounded px-10 py-4 font-bold uppercase 
            duration-300 
            ${secondary ? 'bg-zinc-600 hover:bg-zinc-700' : 'bg-emerald-600 hover:bg-emerald-700'} ${styles}`}>
			{children}
		</button>
	)
}
